import { weekmeter } from "../.."
import * as fixtures from "./fixtures"

describe("Time.Vab", () => {
	it("type", () => {
		const [time]: weekmeter.Time.Vab[] = fixtures.create(1)
		expect(weekmeter.Time.Vab.is(time)).toEqual(true)
		expect(weekmeter.Time.Vab.is((({ type, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Vab.is((({ date, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Vab.is((({ email, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Vab.is((({ organization, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Vab.is((({ value, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Vab.type.get(time)).toEqual(time)
		expect(weekmeter.Time.Vab.type.get({ ...time, garbage: true })).toEqual(time)
	})
})
