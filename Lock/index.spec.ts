import { weekmeter } from "../index"

describe("Lock", () => {
	it("is", () => {
		const lock: weekmeter.Lock = { date: "2023-01-01", user: "jessie@rocket.com" }
		expect(weekmeter.Lock.is(lock)).toEqual(true)
		expect(weekmeter.Lock.is((({ date, ...lock }) => lock)(lock))).toEqual(false)
		expect(weekmeter.Lock.is((({ user, ...lock }) => lock)(lock))).toEqual(false)
	})
})
