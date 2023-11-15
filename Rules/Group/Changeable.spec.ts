import * as fixtures from "../../fixtures"
import { weekmeter } from "../../index"

describe("Rule.Group.Changeable", () => {
	it("is", () => {
		const group: weekmeter.Rules.Group.Changeable = {
			rules: fixtures.getRuleArray("8h"),
		}
		expect(weekmeter.Rules.Group.Changeable.is(group)).toEqual(true)
		expect(weekmeter.Rules.Group.Changeable.is((({ rules, ...group }) => group)(group))).toEqual(false)
	})
})
