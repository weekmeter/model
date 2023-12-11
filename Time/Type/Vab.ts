import { isly } from "isly"

export type Vab = typeof Vab.value
export namespace Vab {
	export const value = "vab" as const
	export const type = isly.string(value)
	export const is = type.is
	export const flaw = type.flaw
}
