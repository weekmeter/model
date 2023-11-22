import { isoly } from "isoly"
import { isly } from "isly"
import { Lock as BalanceLock } from "./Lock"

export interface Balance {
	value: isoly.TimeSpan
	lock?: isoly.Date
}
export namespace Balance {
	export type Lock = BalanceLock
	export const Lock = BalanceLock
	export const type = isly.object<Balance>({
		value: isly.fromIs<isoly.TimeSpan>("isoly.TimeSpan", isoly.TimeSpan.is),
		lock: isly.fromIs<isoly.Date>("isoly.Date", isoly.Date.is).optional(),
	})
	export const is = type.is
	export const flaw = type.flaw
}
