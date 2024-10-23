import { isly } from "isly"

export type NonWork = typeof NonWork.values[number]

export namespace NonWork {
	export const values = ["vacation", "unpaid", "parental", "sick"] as const
	export const type = isly.named("weekmeter.Day.Key.NonWork", isly.string(values))
	export const is = type.is
	export const flaw = type.flaw
}
