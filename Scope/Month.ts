import { isoly } from "isoly"
import { isly } from "isly"

export type Month = `${number}-${number}`

export namespace Month {
	export const type = isly.named("weekmeter.Scope.Month", isly.string<Month>(/^\d{4}-\d{2}$/))
	export const is = type.is
	export const flaw = type.flaw

	export function now(): Month {
		return from(isoly.Date.now())
	}
	export function from(date: isoly.Date): Month {
		return date.substring(0, 7) as Month
	}
	export function next(month: Month, months = 1): Month {
		return from(isoly.Date.nextMonth(getDay(month, 1), months))
	}
	export function previous(week: Month, months = 1): Month {
		return next(week, -months)
	}
	export function first(month: Month): isoly.Date {
		return getDay(month, 0)
	}
	export function last(month: Month): isoly.Date {
		return getDay(month, length(month) - 1)
	}
	export function getYear(month: Month): number {
		return Number.parseInt(month.substring(0, 4))
	}
	export function getMonth(month: Month): number {
		return Number.parseInt(month.substring(5, 7))
	}
	export function length(month: Month): 28 | 29 | 30 | 31 {
		return isoly.Date.getDay(isoly.Date.lastOfMonth(getDay(month, 0))) as any
	}
	export function getDay(month: Month, day: number): isoly.Date {
		return `${month}-${(day + 1).toString().padStart(2, "0")}`
	}
	export function getDays(month: Month): isoly.Date[] {
		return [...Array(length(month)).keys()].map(day => getDay(month, day))
	}
}
