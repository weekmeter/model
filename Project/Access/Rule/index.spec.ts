import { fixtures } from "../../../fixtures"
import { weekmeter } from "../../../index"

describe("Project.Access.Rule", () => {
	it("is", () => {
		const passing: weekmeter.Project.Access.Rule[] = fixtures.project.access.rule.array()
		const failing: weekmeter.Project.Access.Rule[] = [
			"report if (user.team:QA)",
			"flight if (user.team:QA)",
			"work if user.team:QA",
			"work user.team:QA",
			"work (user.team:QA)",
			"work i (user.team:QA)",
			"work f (user.team:QA)",
			"workif(user.team:QA)",
			"work if(user.team:QA)",
			"workif (user.team:QA)",
			"work fi (user.team:QA)",
		]
		passing.forEach(rule => expect(weekmeter.Project.Access.Rule.is(rule)).toEqual(true))
		failing.forEach(rule => expect(weekmeter.Project.Access.Rule.is(rule)).toEqual(false))
	})
})
