import { fixtures } from "../../../fixtures"
import { weekmeter } from "../../../index"

describe("Project.Access.Engine.Rule", () => {
	it("static is/parse", () => {
		const rules: weekmeter.Project.Access.Rule[] = fixtures.project.access.rule.array()
		const parsed: weekmeter.Project.Access.Engine.Rule[] | undefined = weekmeter.Project.Access.Engine.Rule.parse(rules)
		if (parsed == undefined) {
			expect(parsed).not.toEqual(undefined)
			return
		}
		parsed.forEach(rule => expect(weekmeter.Project.Access.Engine.Rule.is(rule)).toEqual(true))
	})
	it("is", () => {
		const rules = {
			passing: fixtures.project.access.rule.array(),
			failing: ["work if (user.country:UK)", "work if (project.activities:lunch)"],
		}
		const parsed = {
			passing: weekmeter.Project.Access.Engine.Rule.parse(rules.passing) ?? [],
			failing: weekmeter.Project.Access.Engine.Rule.parse(rules.failing) ?? [],
		}
		if (!parsed.passing.length || !parsed.failing.length) {
			expect(parsed).not.toEqual(undefined)
			return
		}
		const state = fixtures.project.access.engine.state()
		parsed.passing.forEach(rule => expect(rule.is(state)).toEqual(true))
		parsed.failing.forEach(rule => expect(rule.is(state)).toEqual(false))
	})
	it("stringify", () => {
		const rules = fixtures.project.access.rule.array()
		const parsed = weekmeter.Project.Access.Engine.Rule.parse(rules)
		const stringRules = parsed?.map(rule => rule.stringify())
		expect(stringRules).toEqual(rules)
	})
})
