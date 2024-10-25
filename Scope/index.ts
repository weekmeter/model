import { isoly } from "isoly"
import { isly } from "isly"
import { Day as ScopeDay } from "./Day"
import { Length as ScopeLength } from "./Length"
import { Month as ScopeMonth } from "./Month"
import { Week as ScopeWeek } from "./Week"

export type Scope = Scope.Month | Scope.Week | isoly.Date

export namespace Scope {
	export import Day = ScopeDay
	export import Length = ScopeLength
	export import Month = ScopeMonth
	export import Week = ScopeWeek
	export const type = isly.named(
		"Scope",
		isly.union(Month.type, Week.type, isly.fromIs<isoly.Date>("isoly.Date", isoly.Date.is))
	)
	export const is = type.is
	export const flaw = type.flaw
	export function now(length: Length): isoly.Date {
		return length == "month" ? Month.now() : length == "week" ? Week.now() : Day.now()
	}
	export function from(length: Length, date: isoly.Date): Scope {
		return length == "month" ? Month.from(date) : length == "week" ? Week.from(date) : date
	}
	export function next(scope: Scope, units = 1): Scope {
		return Month.is(scope)
			? Month.next(scope, units)
			: Week.is(scope)
			? Week.next(scope, units)
			: Day.next(scope, units)
	}
	export function previous(scope: Scope, units = 1): Scope {
		return Month.is(scope)
			? Month.previous(scope, units)
			: Week.is(scope)
			? Week.previous(scope, units)
			: Day.previous(scope, units)
	}
	export function length(scope: Scope): Length {
		return Month.is(scope) ? "month" : Week.is(scope) ? "week" : "day"
	}
	export function first(scope: Scope): isoly.Date {
		return Month.is(scope) ? Month.first(scope) : Week.is(scope) ? Week.first(scope) : Day.first(scope)
	}
	export function last(scope: Scope): isoly.Date {
		return Month.is(scope) ? Month.last(scope) : Week.is(scope) ? Week.last(scope) : Day.last(scope)
	}
	export function getDays(scope: Scope): isoly.Date[] {
		return Month.is(scope) ? Month.getDays(scope) : Week.is(scope) ? Week.getDays(scope) : Day.getDays(scope)
	}
	export function includes(scope: Scope, date: isoly.Date): boolean {
		const start = first(scope)
		const end = last(scope)
		return start <= date && date <= end
	}
}
