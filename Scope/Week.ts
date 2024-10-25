import { isoly } from "isoly"
import { isly } from "isly"

export type Week = `${number}-W${number}`

export namespace Week {
	export const type = isly.named("weekmeter.Scope.Week", isly.string<Week>(/^\d{4}-W\d{2}$/))
	export const is = type.is
	export const flaw = type.flaw

	export function now(): Week {
		return from(isoly.Date.now())
	}
	export function from(date: isoly.Date): Week {
		const parsed = new Date(date)
		parsed.setUTCDate(parsed.getUTCDate() + 4 - (parsed.getUTCDay() || 7))
		const start = new Date(Date.UTC(parsed.getUTCFullYear(), 0, 1))
		const week = Math.ceil(((parsed.getTime() - start.getTime()) / 86400000 + 1) / 7)
		return `${parsed.getUTCFullYear()}-W${week.toString().padStart(2, "0")}` as Week
	}
	export function next(week: Week, weeks = 1): Week {
		return from(isoly.Date.next(first(week), weeks * 7))
	}
	export function previous(week: Week, weeks = 1): Week {
		return next(week, -weeks)
	}
	export function first(week: Week): isoly.Date {
		const [year, weekNumber] = week.split("-W")
		const yearNumber = parseInt(year, 10)
		const date = new Date(`${yearNumber}-01-01`)
		const jan4th = new Date(`${yearNumber}-01-04`)
		const jan4thDay = (jan4th.getDay() + 6) % 7
		const ordinalDate = 1 + (parseInt(weekNumber, 10) - 1) * 7 - jan4thDay + 3
		date.setUTCDate(ordinalDate)
		return isoly.Date.create(date)
	}
	export function last(week: Week): isoly.Date {
		return getDay(week, 6)
	}
	export function getYear(week: Week): number {
		return Number.parseInt(week.substring(0, 4))
	}
	export function getWeek(week: Week): number {
		return Number.parseInt(week.substring(6, 8))
	}
	export function getDay(week: Week, day: number): isoly.Date {
		return isoly.Date.next(first(week), day)
	}
	export function getDays(week: Week): isoly.Date[] {
		const monday = first(week)
		return [...Array(7).keys()].map(day => isoly.Date.next(monday, day))
	}
}
