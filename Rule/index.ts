import { isly } from "isly"
import { Action } from "./Action"
import { Adjust } from "./Adjust"
import { Base } from "./Base"
import { Criteria } from "./Criteria"
import { Set } from "./Set"
import { State as RuleState } from "./State"
import { Time } from "./Time"

export type Rule = Pick<Base, keyof Base>
export namespace Rule {
	export type State = RuleState
	export const State = RuleState
	export const type = isly.fromIs<Rule>("Rule", value => value instanceof Base)
	export const is = type.is
	export const flaw = type.flaw
	export function parse(rule: string): Rule | undefined {
		const { action, time, criteria } = Action.parse(rule, remainder => Time.parse(remainder, Criteria.parse))
		return action == undefined || time == undefined
			? undefined
			: Action.Set.is(action)
			? Set.create(criteria, time)
			: Adjust.create(criteria, time)
	}
}
