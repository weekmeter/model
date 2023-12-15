import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"

export interface State {
	date: string
	year: string
	month: string[]
	week: string[]
	day: string[]
	user: string
}
export namespace State {
	export const type = isly.object<State>({
		date: isly.fromIs("isoly.Date", isoly.Date.is),
		year: isly.string(/\d+/),
		month: isly.array(isly.string(/\d+/)),
		week: isly.array(isly.string(/\d+/)),
		day: isly.array(isly.string(/.+/)),
		user: userwidgets.Email.type,
	})
	export const is = type.is
	export const flaw = type.flaw
	export function create(date: isoly.Date, user: userwidgets.Email): State {
		return {
			date,
			year: isoly.Date.getYear(date).toString(10),
			month: [isoly.Date.getMonth(date).toString(10), isoly.Date.getMonth(date).toString(10).padStart(2, "0")],
			week: [isoly.Date.getWeek(date).toString(10), isoly.Date.getWeek(date).toString(10).padStart(2, "0")],
			day: [
				isoly.Date.getDay(date).toString(10),
				isoly.Date.getDay(date).toString(10).padStart(2, "0"),
				isoly.Date.getWeekDay(date, "en-US", { format: "long" }),
			],
			user: user,
		}
	}
}
