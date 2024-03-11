import { fixtures } from "../../fixtures"
import { weekmeter } from "../../index"

describe("Rules.Changeable", () => {
	it("is", () => {
		const rules: weekmeter.Time.Rules.Changeable = fixtures.time.rules.changeable()
		expect(weekmeter.Time.Rules.Changeable.is(rules)).toEqual(true)
		expect(weekmeter.Time.Rules.Changeable.is((({ common, ...rules }) => rules)(rules))).toEqual(true)
		expect(weekmeter.Time.Rules.Changeable.is((({ users, ...rules }) => rules)(rules))).toEqual(true)
	})
})
