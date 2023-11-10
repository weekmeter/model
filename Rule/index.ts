import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Action } from "./Action"
import { Adjust } from "./Adjust"
import { Base } from "./Base"
import { Criteria } from "./Criteria"
import { Set } from "./Set"
import { State } from "./State"
import { Time } from "./Time"

export type Rule = Pick<Base, keyof Base>
export namespace Rule {
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
	export function expected(
		user: userwidgets.Email,
		dates: isoly.Date[] | isoly.DateRange,
		rules: Rule[]
	): isoly.TimeSpan
	export function expected(
		user: userwidgets.Email,
		dates: isoly.Date[] | isoly.DateRange,
		rules: (string | Rule)[]
	): isoly.TimeSpan | undefined
	export function expected(
		user: userwidgets.Email,
		dates: isoly.Date[] | isoly.DateRange,
		raw: Rule[]
	): isoly.TimeSpan | undefined {
		let result: isoly.TimeSpan | undefined
		const rules = raw.reduce((result: Rule[], rule) => result.concat(is(rule) ? rule : parse(rule) ?? []), [])
		if (raw.length > rules.length)
			result = undefined
		else {
			const states = (Array.isArray(dates) ? dates : isoly.DateRange.toDates(dates, true)).map(date =>
				State.create(date, user)
			)
			result = states.reduce(
				(result: isoly.TimeSpan, state) =>
					isoly.TimeSpan.add(
						result,
						rules.reduce((result: isoly.TimeSpan, rule) => rule.evaluate(state, result), {})
					),
				{}
			)
		}
		return result
	}
}
