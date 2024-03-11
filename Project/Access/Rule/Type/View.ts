import { isly } from "isly"

export type View = typeof View.value
export namespace View {
	export const value = "view" as const
	export const type = isly.string<View>(value)
	export const is = type.is
	export const flaw = type.flaw
}
