import { isly } from "isly"

export type Parental = typeof Parental.value
export namespace Parental {
	export const value = "parental" as const
	export const type = isly.string(value)
	export const is = type.is
	export const flaw = type.flaw
}
