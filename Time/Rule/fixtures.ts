import { Rule } from "./index"

export const rule = Object.assign(createRule, { array: createRuleArray })
function createRuleArray(time = "8h"): Rule[] {
	return [
		{ name: "Monday", value: `set ${time} day:Monday` },
		{ name: "Tuesday", value: `set ${time} day:Tuesday` },
		{ name: "Wednesday", value: `set ${time} day:Wednesday` },
		{ name: "Thursday", value: `set ${time} day:Thursday` },
		{ name: "Friday", value: `set ${time} day:Friday` },
	]
}
function createRule(time = "8h"): Rule {
	return { name: "Monday", value: `set ${time} day:Monday` }
}
