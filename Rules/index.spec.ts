import * as fixtures from "../fixtures"
import { weekmeter } from "../index"

describe("Rules", () => {
	it("is", () => {
		const rules = fixtures.getRules()
		expect(weekmeter.Rules.is(rules)).toEqual(true)
		expect(weekmeter.Rules.is((({ organization, ...rules }) => rules)(rules))).toEqual(false)
		expect(weekmeter.Rules.is((({ common, ...rules }) => rules)(rules))).toEqual(false)
		expect(weekmeter.Rules.is((({ users, ...rules }) => rules)(rules))).toEqual(false)
	})
	it("type.get", () => {
		const rules = fixtures.getRules()
		const changeable = weekmeter.Rules.Changeable.type.get(rules)
		expect(changeable).toBeTruthy()
		expect(rules).not.toEqual(changeable)
	})
})
