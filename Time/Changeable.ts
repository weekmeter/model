import { isoly } from "isoly"
import { isly } from "isly"

export interface Changeable {
	value: isoly.TimeSpan
}
export namespace Changeable {
	export const type = isly.object<Changeable>({ value: isly.fromIs("TimeSpand", isoly.TimeSpan.is) })
	export const is = type.is
	export const flaw = type.flaw
}
