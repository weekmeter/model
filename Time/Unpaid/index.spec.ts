import { weekmeter } from "../.."
import * as fixtures from "./fixtures"

describe("Time.Unpaid", () => {
	it("type", () => {
		const [time]: weekmeter.Time.Unpaid[] = fixtures.create(1)
		expect(weekmeter.Time.Unpaid.is(time)).toEqual(true)
		expect(weekmeter.Time.Unpaid.is((({ type, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Unpaid.is((({ date, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Unpaid.is((({ email, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Unpaid.is((({ organization, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Unpaid.is((({ value, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Unpaid.type.get(time)).toEqual(time)
		expect(weekmeter.Time.Unpaid.type.get({ ...time, garbage: true })).toEqual(time)
	})
})
