import { isly } from "isly"

export type Set = typeof Set.value
export namespace Set {
	export const value = "set" as const
	export const type = isly.string("set")
	export const is = type.is
	export const flaw = type.flaw
	export function parse(action: string): Set | undefined {
		return !is(action) ? undefined : action
	}
}
