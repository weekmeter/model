import type { Rule } from "./index"

export const rule = Object.assign(createRule, {
	array: (): Rule[] => [
		"work if (user.team:QA)",
		"work if (user.country:SE)",
		"work if (user.department:Development)",
		"work if (project.code:weekmeter)",
		"work if (project.activities:some(code:sprint))",
		"view if (user.department:Development)",
		"admin if (user.department:Development)",
	],
})
function createRule(): Rule {
	return "work if (user.team:QA)"
}
