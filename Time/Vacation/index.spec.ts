import { weekmeter } from "../.."
import * as fixtures from "./fixtures"

describe("Time.Vacation", () => {
	it("type", () => {
		const [time]: weekmeter.Time.Vacation[] = fixtures.create(1)
		expect(weekmeter.Time.Vacation.is(time)).toEqual(true)
		expect(weekmeter.Time.Vacation.is((({ type, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Vacation.is((({ date, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Vacation.is((({ email, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Vacation.is((({ organization, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Vacation.is((({ value, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Vacation.type.get(time)).toEqual(time)
		expect(weekmeter.Time.Vacation.type.get({ ...time, garbage: true })).toEqual(time)
	})
})
