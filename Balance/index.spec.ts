import { weekmeter } from "../index"

describe("Balance", () => {
	it("is", () => {
		const balance: weekmeter.Balance = { value: { hours: 1, minutes: 30 }, lock: "2023-01-01" }
		expect(weekmeter.Balance.is(balance)).toEqual(true)
		expect(weekmeter.Balance.is((({ lock, ...balance }) => balance)(balance))).toEqual(true)
		expect(weekmeter.Balance.is((({ value, ...balance }) => balance)(balance))).toEqual(false)
	})
})
