import { weekmeter } from "../../index"

describe("Lock", () => {
	it("is", () => {
		const lock: weekmeter.Balance.Lock = { date: "2023-01-01" }
		expect(weekmeter.Balance.Lock.is(lock)).toEqual(true)
		expect(weekmeter.Balance.Lock.is((({ date, ...lock }) => lock)(lock))).toEqual(false)
		// expect(weekmeter.Balance.Lock.is((({ user, ...lock }) => lock)(lock))).toEqual(false)
	})
})
