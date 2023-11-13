import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"

export interface State {
	date: string
	year: string
	month: string
	week: string
	day: string
	weekDay: string
	user: string
}
export namespace State {
	export const type = isly.object<State>({
		date: isly.fromIs("isoly.Date", isoly.Date.is),
		year: isly.string(/\d+/),
		month: isly.string(/\d+/),
		week: isly.string(/\d+/),
		day: isly.string(/\d+/),
		weekDay: isly.string(/Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday/),
		user: userwidgets.Email.type,
	})
	export const is = type.is
	export const flaw = type.flaw
	export function create(date: isoly.Date, user: userwidgets.Email): State {
		return {
			date,
			year: isoly.Date.getYear(date).toString(10),
			month: isoly.Date.getMonth(date).toString(10),
			week: isoly.Date.getWeek(date).toString(10),
			day: isoly.Date.getDay(date).toString(10),
			weekDay: isoly.Date.getWeekDay(date, "en-US", { format: "long" }),
			user: user,
		}
	}
}
