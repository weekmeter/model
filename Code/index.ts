import { isly } from "isly"

export type Code = string
export namespace Code {
	export const type = isly.string(/^[a-z0-9_-]+$/)
	export const is = type.is
	export const flaw = type.flaw
}