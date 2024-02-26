import { activity } from "../Activity/fixtures"
import { code } from "../Code/fixtures"
import { modified } from "../Modified/fixtures"
import { access } from "./Access/fixtures"
import type { Project } from "./index"

export const project = Object.assign(createProject, {
	changeable: createProjectChangeable,
	creatable: createProjectCreatable,
	array: createProjectArray,
	access,
})
function createProjectArray(n: number): Project[] {
	return Array.from({ length: n }).map((_, index) => project({ n: index }))
}
function createProject(options?: { n?: number }): Project {
	return {
		...project.creatable(options),
		activities: activity.array((options?.n ?? 1) % 2),
		access: access(),
		modified: modified(),
	}
}
function createProjectCreatable(options?: { n?: number }): Project.Creatable {
	const changeable = project.changeable(options)
	const [, n] = changeable.code.match(/^-*(\d+)\w+$/) ?? []
	return {
		...changeable,
		name: `Name of project ${n}`,
	}
}
function createProjectChangeable(options?: { n?: number }): Project.Changeable {
	const project = code({ ...options, resource: "project" })
	return {
		organization: code({ ...options, resource: "organization" }),
		client: code({ ...options, resource: "client" }),
		code: project,
	}
}
