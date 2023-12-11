import { isly } from "isly"

export type Work = typeof Work.value
export namespace Work {
	export const value = "work" as const
	export const type = isly.string(value)
	export const is = type.is
	export const flaw = type.flaw
}
