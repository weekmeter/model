import { isoly } from "isoly"
import { isly } from "isly"

export interface Changeable {
	value: isoly.TimeSpan
}
export namespace Changeable {
	export const type = isly.object()
}
