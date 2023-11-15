import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Rule } from "../Rule"

export interface Changeable {
	organization: userwidgets.Organization.Identifier
	common?: Rule.Group.Changeable
	users?: Record<userwidgets.Email, Rule.Group.Changeable>
}
export namespace Changeable {
	export const type = isly.object<Changeable>({
		organization: userwidgets.Organization.Identifier.type,
		common: Rule.Group.Changeable.type.optional(),
		users: isly.union<undefined | Changeable["users"], undefined, Changeable["users"]>(
			isly.undefined(),
			isly.record<userwidgets.Email, Rule.Group.Changeable>(userwidgets.Email.type, Rule.Group.Changeable.type)
		),
	})
	export const is = type.is
	export const flaw = type.flaw
}
