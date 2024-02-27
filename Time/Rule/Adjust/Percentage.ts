import { TimeSpan } from "isoly"
import { selectively } from "selectively"
import { isly } from "isly"
import { Action } from "../Action"
import { Base } from "../Base"
import { Time } from "../Time"

export class Percentage extends Base {
	#action?: string
	get action(): string {
		return (this.#action ??= Action.Adjust.value)
	}
	#time?: string
	get time(): string {
		return (this.#time ??= Time.Percentage.toString(this.adjustment))
	}
	constructor(criteria: selectively.Rule, private adjustment: number) {
		super(criteria)
	}
	protected apply(duration: TimeSpan): TimeSpan {
		return Object.fromEntries(Object.entries(duration).map(([key, value]) => [key, value * this.adjustment]))
	}
}
export namespace Percentage {
	export const type = isly.fromIs<Percentage>("Percentage", value => value instanceof Percentage)
	export const is = type.is
	export const flaw = type.flaw
}
