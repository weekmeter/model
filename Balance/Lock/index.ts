import { isoly } from "isoly"
import { isly } from "isly"

export interface Lock {
	date: isoly.Date
}
export namespace Lock {
	export const type = isly.object<Lock>({
		date: isly.fromIs<isoly.Date>("isoly.Date", isoly.Date.is),
	})
	export const is = type.is
	export const flaw = type.flaw
}
