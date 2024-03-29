import { fixtures } from "../../fixtures"
import { weekmeter } from "../../index"

describe("Time.Sick", () => {
	it("type", () => {
		const [time]: weekmeter.Time.Sick[] = fixtures.time.sick(1)
		expect(weekmeter.Time.Sick.is(time)).toEqual(true)
		expect(weekmeter.Time.Sick.is((({ type, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Sick.is((({ date, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Sick.is((({ email, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Sick.is((({ organization, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Sick.is((({ value, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Sick.type.get(time)).toEqual(time)
		expect(weekmeter.Time.Sick.type.get({ ...time, garbage: true })).toEqual(time)
	})
})
