import { isoly } from "isoly"
import { isly } from "isly"

export interface Creatable {
	value: isoly.TimeSpan
}
export namespace Creatable {
	export const type = isly.object()
}
