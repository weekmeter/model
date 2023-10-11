import { isoly } from "isoly"
import { isly } from "isly"

export interface Creatable {
	value: isoly.TimeSpan
}
export namespace Creatable {
	export const type = isly.object<Creatable>({ value: isly.fromIs("TimeSpan", isoly.TimeSpan.is) })
	export const is = type.is
	export const flaw = type.flaw
}
