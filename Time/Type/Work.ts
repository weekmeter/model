import { isly } from "isly"

export type Work = typeof Work.value
export namespace Work {
	export const value = "work" as const
	export const type = isly.string(value)
}
