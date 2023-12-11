import { isly } from "isly"

export type Vacation = typeof Vacation.value
export namespace Vacation {
	export const value = "vacation" as const
	export const type = isly.string(value)
	export const is = type.is
	export const flaw = type.flaw
}
