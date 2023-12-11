import { weekmeter } from "../index"
import * as fixtures from "./fixtures"

describe("Time.Base", () => {
	it("type", () => {
		const times: weekmeter.Time[] = fixtures.create(1)
		times.forEach(time => expect(weekmeter.Time.Base.is(time)).toEqual(true))
		times.forEach(time => {
			const cleaned = weekmeter.Time.Base.type.get(time)
			expect(cleaned).toBeTruthy()
			if (time.type == "work")
				expect(cleaned).not.toEqual(time)
			else
				expect(cleaned).toEqual(time)
		})
	})
})
