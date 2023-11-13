import { isoly } from "isoly"
import { selectively } from "selectively"
import { isly } from "isly"
import { Action } from "./Action"
import { Base } from "./Base"
import { Time } from "./Time"

export class Set extends Base {
	#action?: string
	get action(): string {
		return (this.#action ??= Action.Set.value)
	}
	#value?: string
	get time(): string {
		return (this.#value ??= Time.Span.toString(this.duration))
	}
	constructor(criteria: selectively.Rule, private duration: isoly.TimeSpan) {
		super(criteria)
	}
	protected apply(_: isoly.TimeSpan): isoly.TimeSpan {
		return { ...this.duration }
	}
	static create(criteria: selectively.Rule, time: Time): Set | undefined {
		return Time.Percentage.is(time) ? undefined : new this(criteria, time)
	}
}
export namespace Set {
	export const type = isly.fromIs<Set>("Set", value => value instanceof Set)
	export const is = type.is
	export const flaw = type.flaw
}
