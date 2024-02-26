import type { Access } from "../index"
import { Rule as EngineRule } from "./Rule"
import { State as EngineState } from "./State"

export class Engine {
	private constructor(private state: Engine.State, private rules: Engine.Rule[]) {}
	some(...types: Access.Rule.Type[]): boolean {
		return !this.rules.length
			? true
			: this.rules.reduce(
					(result, rule) => (!rule.is(this.state) ? result : (result.delete(rule.type), result)),
					new Set<Access.Rule.Type>(types)
			  ).size < types.length
	}
	every(...types: Access.Rule.Type[]): boolean {
		return !this.rules.length
			? true
			: this.rules.reduce(
					(result, rule) => (!rule.is(this.state) ? result : (result.delete(rule.type), result)),
					new Set<Access.Rule.Type>(types)
			  ).size == 0
	}
	static create(state: Engine.State, access: Access): Engine | undefined {
		const rules = EngineRule.parse(access.rules)
		return !rules ? undefined : new this(state, rules)
	}
	static is(value: unknown): value is Engine {
		return value instanceof Engine
	}
}
export namespace Engine {
	export type Rule = EngineRule
	export const Rule = EngineRule
	export type State = EngineState
	export const State = EngineState
}
