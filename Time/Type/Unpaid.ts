import { isly } from "isly"

export type Unpaid = typeof Unpaid.value
export namespace Unpaid {
	export const value = "unpaid" as const
	export const type = isly.string(value)
	export const is = type.is
	export const flaw = type.flaw
}
