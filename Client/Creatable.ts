import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"

export interface Creatable {
	name: string
	code: string
	organization: userwidgets.Organization.Identifier
}
export namespace Creatable {
	export const type = isly.object<Creatable>({
		name: isly.string(),
		code: isly.string(),
		organization: userwidgets.Organization.Identifier.type,
	})
	export const is = type.is
	export const flaw = type.flaw
}
