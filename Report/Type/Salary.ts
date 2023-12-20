import { isly } from "isly"

export type Salary = typeof Salary.value
export namespace Salary {
	export const value = "salary" as const
	export const type = isly.string(value)
	export const is = type.is
	export const flaw = type.flaw
}
