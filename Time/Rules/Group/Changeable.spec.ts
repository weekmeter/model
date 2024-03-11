import { fixtures } from "../../../fixtures"
import { weekmeter } from "../../../index"

describe("Rule.Group.Changeable", () => {
	it("is", () => {
		const group: weekmeter.Time.Rules.Group.Changeable = {
			rules: fixtures.time.rule.array("8h"),
		}
		expect(weekmeter.Time.Rules.Group.Changeable.is(group)).toEqual(true)
		expect(weekmeter.Time.Rules.Group.Changeable.is((({ rules, ...group }) => group)(group))).toEqual(false)
	})
})
