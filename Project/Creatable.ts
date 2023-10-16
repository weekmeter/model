import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Client } from "../Client"

export interface Creatable {
	name: string
	code: string
	organization: userwidgets.Organization.Identifier
	client: Client["code"]
}
export namespace Creatable {
	export const type = isly.object<Creatable>({
		name: isly.string(),
		code: isly.string(),
		organization: userwidgets.Organization.Identifier.type,
		client: isly.string(),
	})
	export const is = type.is
	export const flaw = type.flaw
}
