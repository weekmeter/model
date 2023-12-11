import { weekmeter } from "../index"
import * as fixtures from "./fixtures"

describe("Time", () => {
	it("testing", () => {
		const times: weekmeter.Time[] = fixtures.create(200)
		const record = times.reduce((result, time) => Object.assign(result, { [weekmeter.Time.key(time)]: time }), {})
		const result = Object.values(record)
		console.log(result)
	})
})
