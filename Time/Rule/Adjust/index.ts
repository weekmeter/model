// import { selectively } from "selectively"
import { isly } from "isly"
import { Criteria } from "../Criteria"
import { Time } from "../Time"
import { Percentage } from "./Percentage"
import { Span } from "./Span"

export type Adjust = Percentage | Span
export namespace Adjust {
	export const type = isly.union<Adjust, Percentage, Span>(Percentage.type, Span.type)
	export const is = type.is
	export const flaw = type.flaw
	export function create(criteria: Criteria, time: Time): Adjust {
		return Time.Percentage.is(time) ? new Percentage(criteria, time) : new Span(criteria, time)
	}
}
