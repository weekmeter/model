import type { Project } from "../../index"
import { Access } from "../index"
import { Rule as EngineRule } from "./Rule"
import { State as EngineState, State } from "./State"

export class Engine {
	private constructor(private state: Engine.State, private rules: Engine.Rule[]) {}
	any(): boolean {
		return (
			this.rules.reduce(
				(result, rule) => (!rule.is(this.state) ? result : (result.delete(rule.type), result)),
				new Set<Access.Rule.Type>(Access.Rule.Type.values)
			).size < Access.Rule.Type.values.length
		)
	}
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
	stringify(): Access.Rule[] {
		return this.rules.map(rule => rule.stringify())
	}
	static create(
		project: Parameter<typeof State.create, 0> & Pick<Project, "access">,
		user: Parameter<typeof State.create, 1>
	): Engine | undefined {
		const rules = EngineRule.parse(project.access.rules)
		return !rules ? undefined : new this(State.create(project, user), rules)
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
