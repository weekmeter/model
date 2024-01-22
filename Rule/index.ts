import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Profile } from "../User/Profile"
import { Action } from "./Action"
import { Adjust } from "./Adjust"
import { Base as RuleBase } from "./Base"
import { Criteria } from "./Criteria"
import { Set } from "./Set"
import { State } from "./State"
import { Time } from "./Time"

export interface Rule {
	name: string
	value: string
}
export namespace Rule {
	export type Base = RuleBase
	export const Base = RuleBase

	export const type = isly.object<Rule>({
		name: isly.string(/^.+$/),
		value: isly.string(/^[^ ]+ [^ ]+ .+$/),
	})
	export const is = type.is
	export const flaw = type.flaw
	export function parse(rule: Rule | string): Base | undefined {
		rule = typeof rule == "string" ? rule : rule.value
		const { action, time, criteria } = Action.parse(rule, remainder => Time.parse(remainder, Criteria.parse))
		return action == undefined || time == undefined
			? undefined
			: Action.Set.is(action)
			? Set.create(criteria, time)
			: Adjust.create(criteria, time)
	}

	export function expected(
		user: { email: userwidgets.Email; properties?: Profile.Property[] },
		dates: isoly.Date[] | isoly.DateRange,
		rules: Base[]
	): isoly.TimeSpan
	export function expected(
		user: { email: userwidgets.Email; properties?: Profile.Property[] },
		dates: isoly.Date[] | isoly.DateRange,
		rules: (Rule | string | Base)[]
	): isoly.TimeSpan | undefined
	export function expected(
		user: { email: userwidgets.Email; properties?: Profile.Property[] } | Profile,
		dates: isoly.Date[] | isoly.DateRange,
		raw: (Rule | string | Base)[]
	): isoly.TimeSpan | undefined {
		let result: isoly.TimeSpan | undefined
		const rules = raw.reduce((result: Base[], rule) => result.concat(Base.is(rule) ? rule : parse(rule) ?? []), [])
		if (raw.length > rules.length)
			result = undefined
		else {
			const state = { ...Profile.Property.record(user.properties ?? []), email: user.email }
			const states = (Array.isArray(dates) ? dates : isoly.DateRange.toDates(dates, true)).map(date =>
				State.create(date, state)
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
