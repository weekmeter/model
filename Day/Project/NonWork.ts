import { isly } from "isly"

export type NonWork = typeof NonWork.value
export namespace NonWork {
	export const value = "non-work"
	export const type = isly.string<NonWork>(value)
	export const is = type.is
}
