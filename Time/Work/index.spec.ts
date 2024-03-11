import { fixtures } from "../../fixtures"
import { weekmeter } from "../../index"

describe("Time.Work", () => {
	it("type", () => {
		const [time]: weekmeter.Time.Work[] = fixtures.time.work(1)
		expect(weekmeter.Time.Work.is(time)).toEqual(true)
		expect(weekmeter.Time.Work.is((({ type, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Work.is((({ date, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Work.is((({ email, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Work.is((({ organization, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Work.is((({ value, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Work.type.get(time)).toEqual(time)
		expect(weekmeter.Time.Work.type.get({ ...time, garbage: true })).toEqual(time)
	})
})
