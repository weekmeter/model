import { isoly } from "isoly"
import { isly } from "isly"
import { Day } from "./Day"
import { Time } from "./Time"

export type Days = Partial<Record<isoly.Date, Day>>

export namespace Days {
	export const type = isly.record<isoly.Date, Day | undefined>(
		isly.fromIs("isoly.Date", isoly.Date.is),
		Day.type.optional()
	)
	export const is = type.is
	export const flaw = type.flaw
	export function from(times: Time[]): Days
	export function from(times: Time[] | false): Days | false
	export function from(times: Time[] | false): Days | false {
		return (
			times && times.reduce<Days>((result, time) => ({ ...result, [time.date]: Day.set(result[time.date], time) }), {})
		)
	}
}
