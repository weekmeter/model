import type { Project } from "../../index"
import { Access } from "../index"
import { Rule as EngineRule } from "./Rule"
import { State as EngineState, State } from "./State"

export class Engine {
	private constructor(private state: Engine.State, private rules: Engine.Rule[]) {}
	any(): boolean {
		return this.some(...Access.Rule.Type.values)
	}
	some(...types: Access.Rule.Type[]): boolean {
		let result: Return<Engine["some"]>
		if (!this.rules.length)
			result = true
		else
			result = !!this.rules.find(rule => rule.is(this.state) && types.includes(rule.type))
		return result
	}
	every(...types: Access.Rule.Type[]): boolean {
		let result: Return<Engine["every"]>
		if (!this.rules.length)
			result = true
		else
			for (
				let [index, remainder] = [0, new Set(types)];
				!(result = !remainder.size) && index < this.rules.length;
				index++
			)
				if (this.rules[index].is(this.state))
					remainder.delete(this.rules[index].type)
		return result
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
