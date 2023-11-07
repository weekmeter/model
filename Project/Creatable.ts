import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import type { Client } from "../Client"
import { Code } from "../Code"

export interface Creatable {
	name: string
	code: Code
	organization: userwidgets.Organization.Identifier
	client: Client["code"]
}
export namespace Creatable {
	export const type = isly.object<Creatable>({
		name: isly.string(),
		code: Code.type,
		organization: userwidgets.Organization.Identifier.type,
		client: Code.type,
	})
	export const is = type.is
	export const flaw = type.flaw
	export function key(project: Omit<Creatable, "name">): string {
		return `${project.organization}|${project.client}|${project.code}`
	}
}
