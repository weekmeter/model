import { isly } from "isly"

export type Set = "set"
export namespace Set {
	export const type = isly.string("set")
	export const is = type.is
	export const flaw = type.flaw
}
