import { isoly } from "isoly"
import { endsWith, selectively } from "selectively"
import { isly } from "isly"
import { Action } from "./Action"

export abstract class Rule {
	protected readonly action: Action
	protected readonly expected: isoly.TimeSpan | number
	protected criteria: selectively.Rule

	static parse(rule: string): Rule | undefined {
		// const [action, expected, criteria] = rule.split(" ", 3)
		const [action, expected, criteria] = (([action, expected, criteria]) => [
			Action.parse(action),
			Expected.parse(expected),
			selectively.parse(criteria),
		])(rule.split(" ", 3))
		return action == undefined || expected == undefined ? undefined : undefined /* continue here */
	}
}

export namespace Rule {
	export const type = isly.object<Rule>({
		duration: isly.fromIs<isoly.TimeSpan>("isoly.TimeSpan", isoly.TimeSpan.is),
		criteria: isly.array(isly.string()),
	})

	export function expected(date: isoly.Date, rules: Rule[]): isoly.TimeSpan {
		const rule = rules.find(rule =>
			rule.criteria.some(criteria =>
				selectively.parse(criteria).is({
					date,
					year: isoly.Date.getYear(date),
					month: isoly.Date.getMonth(date),
					week: isoly.Date.getWeek(date),
					day: isoly.Date.getDay(date),
					weekDay: isoly.Date.getWeekDay(date, "en-US", { format: "long" }),
					// user
					// country
				})
			)
		)
		return rule?.expected ?? {}
	}
}
