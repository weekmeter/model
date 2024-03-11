import { fixtures } from "../../../fixtures"
import { weekmeter } from "../../../index"

describe("Rule.Group", () => {
	const group: weekmeter.Time.Rules.Group = {
		rules: fixtures.time.rule.array("8h"),
		modified: fixtures.modified(),
	}
	it("is", () => {
		expect(weekmeter.Time.Rules.Group.is(group)).toEqual(true)
		expect(weekmeter.Time.Rules.Group.is((({ rules, ...group }) => group)(group))).toEqual(false)
		expect(weekmeter.Time.Rules.Group.is((({ modified, ...group }) => group)(group))).toEqual(false)
	})
	it("type.get", () => {
		const result = weekmeter.Time.Rules.Group.Changeable.type.get(group)
		expect(result).toBeTruthy()
		expect(result).not.toEqual(group)
	})
})
