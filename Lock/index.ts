import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"

export interface Lock {
	user: userwidgets.Email
	date: isoly.Date
}
export namespace Lock {
	export const type = isly.object<Lock>({
		user: userwidgets.Email.type,
		date: isly.fromIs<isoly.Date>("isoly.Date", isoly.Date.is),
	})
	export const is = type.is
	export const flaw = type.flaw
}
