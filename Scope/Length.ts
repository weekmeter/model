import { isly } from "isly"

export type Length = typeof Length.values[number]

export namespace Length {
	export const values = ["month", "week", "day"] as const
	export const type = isly.named("weekmeter.Scope.Length", isly.string<Length>(values))
	export const is = type.is
	export const flaw = type.flaw
}
