import { isoly } from "isoly"
import { isly } from "isly"

export type Day = isoly.Date

export namespace Day {
	export const type = isly.fromIs<Day>("weekmeter.Scope.Day", isoly.Date.is)
	export const is = type.is
	export const flaw = type.flaw

	export function now(): Day {
		return from(isoly.Date.now())
	}
	export function from(day: isoly.Date): Day {
		return day
	}
	export function next(day: Day, days = 1): Day {
		return isoly.Date.next(day, days)
	}
	export function previous(day: Day, days = 1) {
		return next(day, -days)
	}
	export function first(day: Day): isoly.Date {
		return day
	}
	export function last(day: Day): isoly.Date {
		return day
	}
	export function getDays(day: Day): isoly.Date[] {
		return [day]
	}
}
