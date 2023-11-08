import { isly } from "isly"

export type Adjust = "adjust"
export namespace Adjust {
	export const type = isly.string("adjust")
	export const is = type.is
	export const flaw = type.flaw
}
