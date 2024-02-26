import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

describe("Time", () => {
	it("type", () => {
		const times: weekmeter.Time[] = fixtures.time(1)
		times.forEach(time => expect(weekmeter.Time.is(time)).toEqual(true))
		times.forEach(time => expect(weekmeter.Time.type.get(time)).toEqual(time))
		times.forEach(time => expect(weekmeter.Time.type.get({ ...time, garbage: true })).toEqual(time))
	})
})
