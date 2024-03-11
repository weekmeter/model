import { code as code } from "../Code/fixtures"
import { modified as modified } from "../Modified/fixtures"
import type { Activity } from "./index"

export const activity = Object.assign(createActivity, { creatable: createCreatable, array: createActivityArray })
function createActivityArray(n: number): Activity[] {
	return Array.from({ length: n ?? 1 }).map((_, index) => activity({ n: index }))
}
function createActivity(options?: { n?: number }): Activity {
	return {
		...activity.creatable(options),
		modified: modified(),
	}
}
function createCreatable(options?: { n?: number }): Activity.Creatable {
	const activityCode = code({ ...options, resource: "activity" })
	const [, n] = activityCode.match(/^-*(\d+)\w+$/) ?? []
	return {
		organization: code({ ...options, resource: "organization" }),
		client: code({ ...options, resource: "client" }),
		project: code({ ...options, resource: "project" }),
		code: activityCode,
		name: `Name of activity ${n}`,
	}
}
