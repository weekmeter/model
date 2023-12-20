import { weekmeter } from "../index"
import * as fixtures from "./fixtures"

describe("Time", () => {
	it("type", () => {
		const times: weekmeter.Time[] = fixtures.create(1)
		times.forEach(time => expect(weekmeter.Time.is(time)).toEqual(true))
		times.forEach(time => expect(weekmeter.Time.type.get(time)).toEqual(time))
		times.forEach(time => expect(weekmeter.Time.type.get({ ...time, garbage: true })).toEqual(time))
	})
})

