import { isly } from "isly"
import { Percentage as TimePercentage } from "./Percentage"
import { Span as TimeSpan } from "./Span"

export type Time = Time.Span | Time.Percentage
export namespace Time {
	export type Span = TimeSpan
	export const Span = TimeSpan
	export type Percentage = TimePercentage
	export const Percentage = TimePercentage
	export const type = isly.union<Time, Span, Percentage>(Span.type, Percentage.type)
	export const is = type.is
	export const flaw = type.flaw
	export function parse<T extends Record<string, unknown>>(
		rule: string,
		next?: (remainder: string) => T
	): { time: Time | undefined } & T {
		const [time, ...remainder] = rule.split(" ")
		return Object.assign(
			{
				time: Span.parse(time) ?? Percentage.parse(time),
			},
			next?.(remainder.join(" "))
		)
	}
}
