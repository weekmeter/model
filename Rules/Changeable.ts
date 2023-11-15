import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Group } from "./Group"

export interface Changeable {
	common?: Group.Changeable
	users?: Record<userwidgets.Email, Group.Changeable>
}
export namespace Changeable {
	export const type = isly.object<Changeable>({
		common: Group.Changeable.type.optional(),
		users: isly.union<undefined | Changeable["users"], undefined, Changeable["users"]>(
			isly.undefined(),
			isly.record<userwidgets.Email, Group.Changeable>(userwidgets.Email.type, Group.Changeable.type)
		),
	})
	export const is = type.is
	export const flaw = type.flaw
}
