import { fixtures } from "../../fixtures"
import { weekmeter } from "../../index"

describe("Time.Vacation.Changeable", () => {
	it("type", () => {
		const [creatable]: weekmeter.Time.Vacation.Changeable[] = fixtures.time.vacation.changeable(1)
		const [time] = fixtures.time.vacation(1)
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
