import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import type { Client } from "../Client"
import { Code } from "../Code"
import type { Project } from "../Project"

export interface Creatable {
	name: string
	code: Code
	client: Client["code"]
	project: Project["code"]
	organization: userwidgets.Organization.Identifier
}
export namespace Creatable {
	export const type = isly.object<Creatable>({
		name: isly.string(),
		code: Code.type,
		client: Code.type,
		project: Code.type,
		organization: userwidgets.Organization.Identifier.type,
	})
	export const is = type.is
	export const flaw = type.flaw
	export function key(activity: Creatable): string {
		return `${activity.organization}|${activity.client}|${activity.project}|${activity.code}`
	}
}
