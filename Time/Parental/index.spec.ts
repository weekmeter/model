import { fixtures } from "../../fixtures"
import { weekmeter } from "../../index"

describe("Time.Parental", () => {
	it("type", () => {
		const [time]: weekmeter.Time.Parental[] = fixtures.time.parental(1)
		expect(weekmeter.Time.Parental.is(time)).toEqual(true)
		expect(weekmeter.Time.Parental.is((({ type, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Parental.is((({ date, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Parental.is((({ email, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Parental.is((({ organization, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Parental.is((({ value, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Parental.type.get(time)).toEqual(time)
		expect(weekmeter.Time.Parental.type.get({ ...time, garbage: true })).toEqual(time)
	})
})
