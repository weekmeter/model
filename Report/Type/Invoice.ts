import { isly } from "isly"

export type Invoice = typeof Invoice.value
export namespace Invoice {
	export const value = "invoice" as const
	export const type = isly.string(value)
	export const is = type.is
	export const flaw = type.flaw
}
