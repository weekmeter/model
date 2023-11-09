import { isoly } from "isoly"
import { Criteria } from "./Criteria"
import { State } from "./State"

export abstract class Base {
	abstract get action(): string
	abstract get time(): string
	constructor(protected criteria: Criteria) {}
	protected is(state: State): boolean {
		return this.criteria.is(state)
	}
	protected abstract apply(duration: isoly.TimeSpan): isoly.TimeSpan
	evaluate(state: State, expected: isoly.TimeSpan): isoly.TimeSpan {
		return !this.is(state) ? { ...expected } : this.apply(expected)
	}
	toString(): string {
		return `${this.action} ${this.time} ${this.criteria.stringify()}`
	}
}
