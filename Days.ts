import { isoly } from "isoly"
import { Day } from "./Day"
import { Time } from "./Time"

export type Days = Record<isoly.Date, Day | undefined>

export namespace Days {
	export function from(times: Time[]): Days
	export function from(times: Time[] | false): Days | false
	export function from(times: Time[] | false): Days | false {
		return (
			times && times.reduce<Days>((result, time) => ({ ...result, [time.date]: Day.set(result[time.date], time) }), {})
		)
	}
}
