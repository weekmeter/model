import * as fixtures from "../fixtures"
import { weekmeter } from "../index"

describe("Time", () => {
	it("is", () => {
		const time = fixtures.getTime()
		expect(weekmeter.Time.is(time)).toEqual(true)
		expect(weekmeter.Time.is((({ balance, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.is({ ...time, balance: "testing" })).toEqual(false)
	})

	it("get", () => {
		const time = { ...fixtures.getTime(), from: "Testing" }

		expect(weekmeter.Time.type.get(time)).toEqual(fixtures.getTime())
		expect(weekmeter.Time.type.get({ balance: "asd" })).toEqual(undefined)
	})
})
