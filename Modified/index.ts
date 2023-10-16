import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"

export interface Modified {
	value: isoly.DateTime
	by: userwidgets.Email
}

export namespace Modified {
	export const type = isly.object<Modified>({
		value: isly.fromIs<isoly.DateTime>("DateTime", isoly.DateTime.is),
		by: isly.fromIs<userwidgets.Email>("Email", userwidgets.Email.is),
	})
	export const is = type.is
	export const flaw = type.flaw
}
