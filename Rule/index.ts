import { isoly } from "isoly"
import { selectively } from "selectively"
import { isly } from "isly"

export class Rule {
	constructor(
		readonly action: "set" | "adjust",
		readonly expected: isoly.TimeSpan | number,
		readonly criteria: selectively.Rule
	) {}
	toString(): string {
		return [this.action, this.criteria.toString()].join(" ")
	}
	evaluate(expected: number | undefined, state: State): number | undefined {
		return !this.criteria.is(state)
			? expected
			: this.action == "set" && isoly.TimeSpan.is(this.expected)
			? this.expected.hours
			: expected == undefined
			? undefined
			: isoly.TimeSpan.is(this.expected)
			? expected + (this.expected.hours ?? 0)
			: expected * this.expected
	}
	static parse(rule: string): Rule | undefined {
		const splitted = rule.split(rule, 3)
		const action = splitted[0] == "set" || splitted[0] == "adjust" ? splitted[0] : undefined
		const expected = splitted[1].endsWith("h")
			? { hours: Number.parseFloat(splitted[1]) }
			: action == "adjust" && splitted[1].endsWith("%")
			? Number.parseFloat(splitted[1]) / 100
			: undefined
		const criteria = selectively.parse(splitted[2])
		return action && expected != undefined && criteria ? { action, expected, criteria } : undefined
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
