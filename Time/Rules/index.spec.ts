import { fixtures } from "../../fixtures"
import { weekmeter } from "../../index"

describe("Rules", () => {
	it("is", () => {
		const rules: weekmeter.Time.Rules = fixtures.time.rules()
		expect(weekmeter.Time.Rules.is(rules)).toEqual(true)
		expect(weekmeter.Time.Rules.is((({ common, ...rules }) => rules)(rules))).toEqual(false)
		expect(weekmeter.Time.Rules.is((({ users, ...rules }) => rules)(rules))).toEqual(false)
	})
	it("type.get", () => {
		const rules = fixtures.time.rules()
		const changeable = weekmeter.Time.Rules.Changeable.type.get(rules)
		expect(changeable).toBeTruthy()
		expect(rules).not.toEqual(changeable)
	})
	it("array", () => {
		const rules = fixtures.time.rules()
		expect(weekmeter.Time.Rules.array(rules)).toEqual(rules.common.rules)
		expect(weekmeter.Time.Rules.array(rules, "james@rocket.com")).toEqual(rules.common.rules)
		expect(weekmeter.Time.Rules.array(rules, "jessie@rocket.com")).toEqual(
			rules.common.rules.concat(rules.users["jessie@rocket.com"].rules)
		)
	})
})
