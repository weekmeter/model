import { Access } from "../index"
import { Criteria } from "./Criteria"
import type { State } from "./State"

export class Rule {
	private constructor(readonly type: Access.Rule.Type, private criteria: Criteria) {}
	is(state: State): boolean {
		return this.criteria.is(state)
	}
	stringify(): string {
		return `${this.type} if (${this.criteria.stringify()})`
	}
	static create(...parameters: ProtectedConstructorParameters<typeof Rule>): Rule {
		return new this(...parameters)
	}
	static stringify(...rules: Rule[]): string[] {
		return rules.map(rule => rule.stringify())
	}
	static parse(rules: Access.Rule | Rule | Rule.Recursive): Rule[] | undefined {
		let result: Rule[] | undefined
		if (Array.isArray(rules)) {
			result = rules.reduce<Rule[]>((result, rule) => result.concat(Rule.parse(rule) ?? []), [])
			if (result.length != rules.length)
				result = undefined
		} else if (typeof rules != "string")
			result = [rules]
		else {
			const rule = rules
			const match = rule.match(Access.Rule.pattern)
			if (match?.length != 3 || !Access.Rule.Type.is(match[1]))
				result = undefined
			else {
				const [, type, criteria] = match
				result = [new this(type, Criteria.parse(criteria))]
			}
		}
		return result
	}
	static is(value: unknown): value is Rule {
		return value instanceof Rule
	}
}
namespace Rule {
	export type Recursive = (Access.Rule | Rule | Recursive)[]
}
