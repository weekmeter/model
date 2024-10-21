import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Type } from "../Type"

export interface Salary {
	type: Type.Salary
	email: userwidgets.Email
	date: isoly.Date
	adjustment?: isoly.TimeSpan
}
export namespace Salary {
	export const type = isly.object<Salary>({
		type: Type.Salary.type,
		email: userwidgets.Email.type,
		date: isly.fromIs("isoly.Date", isoly.Date.is),
		adjustment: isly.fromIs("isoly.TimeSpan", isoly.TimeSpan.is).optional(),
	})
	export const is = type.is
	export const flaw = type.flaw
}
