import { isoly } from "isoly"
import { isly } from "isly"

export interface Balance {
	value: isoly.TimeSpan
	lock?: isoly.Date
}
export namespace Balance {
	export const type = isly.object<Balance>({
		value: isly.fromIs<isoly.TimeSpan>("isoly.TimeSpan", isoly.TimeSpan.is),
		lock: isly.fromIs<isoly.Date>("isoly.Date", isoly.Date.is).optional(),
	})
	export const is = type.is
	export const flaw = type.flaw
}
