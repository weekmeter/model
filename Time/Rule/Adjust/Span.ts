import { isoly, TimeSpan } from "isoly"
import { isly } from "isly"
import { Action } from "../Action"
import { Base } from "../Base"
import { Criteria } from "../Criteria"
import { Time } from "../Time"

export class Span extends Base {
	#action?: string
	get action(): string {
		return (this.#action ??= Action.Adjust.value)
	}
	#time?: string
	get time(): string {
		return (this.#time ??= Time.Span.toString(this.adjustment))
	}
	constructor(criteria: Criteria, private adjustment: isoly.TimeSpan) {
		super(criteria)
	}
	protected apply(duration: TimeSpan): TimeSpan {
		return Object.entries(this.adjustment).reduce(
			(result, [key, value]: [keyof isoly.TimeSpan, number]) =>
				Object.assign(result, { [key]: (result[key] ?? 0) + value }),
			{ ...duration }
		)
	}
}
export namespace Span {
	export const type = isly.fromIs<Span>("Span", value => value instanceof Span)
	export const is = type.is
	export const flaw = type.flaw
}
