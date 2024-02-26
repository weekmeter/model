import { fixtures } from "../../fixtures"
import { weekmeter } from "../../index"

describe("Rule.Group", () => {
	const group: weekmeter.Rules.Group = {
		rules: fixtures.rule.array("8h"),
		modified: fixtures.modified(),
	}
	it("is", () => {
		expect(weekmeter.Rules.Group.is(group)).toEqual(true)
		expect(weekmeter.Rules.Group.is((({ rules, ...group }) => group)(group))).toEqual(false)
		expect(weekmeter.Rules.Group.is((({ modified, ...group }) => group)(group))).toEqual(false)
	})
	it("type.get", () => {
		const result = weekmeter.Rules.Group.Changeable.type.get(group)
		expect(result).toBeTruthy()
		expect(result).not.toEqual(group)
	})
})
