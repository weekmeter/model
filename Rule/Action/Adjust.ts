import { isly } from "isly"

export type Adjust = typeof Adjust.value
export namespace Adjust {
	export const value = "adjust" as const
	export const type = isly.string("adjust")
	export const is = type.is
	export const flaw = type.flaw
	export function parse(action: string): Adjust | undefined {
		return !is(action) ? undefined : action
	}
}
