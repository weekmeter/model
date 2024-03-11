import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Client } from "../Client"
import { Code } from "../Code"
import { Access } from "./Access"

export interface Changeable {
	organization: userwidgets.Organization.Identifier
	client: Pick<Client.Creatable, "code">
	code: Code
	name?: string
	access?: Access
}
export namespace Changeable {
	export const type = isly.object<Changeable>({
		organization: userwidgets.Organization.Identifier.type,
		client: isly.object<Changeable["client"]>({
			code: Code.type,
		}),
		code: Code.type,
		name: isly.string().optional(),
		access: Access.type.optional(),
	})
	export const is = type.is
	export const flaw = type.flaw
	export function key(
		project:
			| Pick<Changeable, "organization" | "client" | "code">
			| (Pick<Changeable, "organization" | "code"> & { client: string })
	): string {
		const client = typeof project.client == "string" ? project.client : project.client.code
		return `${project.organization}|${client}|${project.code}`
	}
}
