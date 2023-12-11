import { isly } from "isly"

export type Sick = typeof Sick.value
export namespace Sick {
	export const value = "sick" as const
	export const type = isly.string(value)
	export const is = type.is
	export const flaw = type.flaw
}
