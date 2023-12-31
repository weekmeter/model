import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Code } from "../Code"

export interface Creatable {
	name: string
	code: Code
	organization: userwidgets.Organization.Identifier
}
export namespace Creatable {
	export const type = isly.object<Creatable>({
		name: isly.string(),
		code: Code.type,
		organization: userwidgets.Organization.Identifier.type,
	})
	export const is = type.is
	export const flaw = type.flaw
	export function key(client: Omit<Creatable, "name">): string {
		return `${client.organization}|${client.code}`
	}
}
