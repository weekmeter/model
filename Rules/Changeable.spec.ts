import * as fixtures from "../fixtures"
import { weekmeter } from "../index"

describe("Rules.Changeable", () => {
	it("is", () => {
		const rules = fixtures.getRules.changeable()
		expect(weekmeter.Rules.Changeable.is(rules)).toEqual(true)
		expect(weekmeter.Rules.Changeable.is((({ common, ...rules }) => rules)(rules))).toEqual(true)
		expect(weekmeter.Rules.Changeable.is((({ users, ...rules }) => rules)(rules))).toEqual(true)
	})
})
