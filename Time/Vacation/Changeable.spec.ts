import { weekmeter } from "../../index"
import * as fixtures from "./fixtures"

describe("Time.Vacation.Changeable", () => {
	it("type", () => {
		const [creatable]: weekmeter.Time.Vacation.Changeable[] = fixtures.create.changeable(1)
		const [time] = fixtures.create(1)
		expect(weekmeter.Time.Vacation.Changeable.is(creatable)).toEqual(true)
		expect(weekmeter.Time.Vacation.Changeable.is((({ type, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Vacation.Changeable.is((({ date, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Vacation.Changeable.is((({ email, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Vacation.Changeable.is((({ organization, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Vacation.Changeable.is((({ value, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Vacation.Changeable.type.get(creatable)).toEqual(creatable)
		expect(weekmeter.Time.Vacation.Changeable.type.get(time)).toEqual(creatable)
	})
})
