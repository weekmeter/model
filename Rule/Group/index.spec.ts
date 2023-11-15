import * as fixtures from "../../fixtures"
import { weekmeter } from "../../index"

describe("Rule.Group", () => {
	const group: weekmeter.Rule.Group = {
		rules: fixtures.getRuleArray("8h"),
		modified: fixtures.getModified(),
	}
	it("is", () => {
		expect(weekmeter.Rule.Group.is(group)).toEqual(true)
		expect(weekmeter.Rule.Group.is((({ rules, ...group }) => group)(group))).toEqual(false)
		expect(weekmeter.Rule.Group.is((({ modified, ...group }) => group)(group))).toEqual(false)
	})
	it("type.get", () => {
		const result = weekmeter.Rule.Group.Changeable.type.get(group)
		expect(result).toBeTruthy()
		expect(result).not.toEqual(group)
	})
})
