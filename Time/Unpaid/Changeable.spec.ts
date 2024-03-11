import { fixtures } from "../../fixtures"
import { weekmeter } from "../../index"

describe("Time.Unpaid.Changeable", () => {
	it("type", () => {
		const [creatable]: weekmeter.Time.Unpaid.Changeable[] = fixtures.time.unpaid.changeable(1)
		const [time] = fixtures.time.unpaid(1)
		expect(weekmeter.Time.Unpaid.Changeable.is(creatable)).toEqual(true)
		expect(weekmeter.Time.Unpaid.Changeable.is((({ type, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Unpaid.Changeable.is((({ date, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Unpaid.Changeable.is((({ email, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Unpaid.Changeable.is((({ organization, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Unpaid.Changeable.is((({ value, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Unpaid.Changeable.type.get(creatable)).toEqual(creatable)
		expect(weekmeter.Time.Unpaid.Changeable.type.get(time)).toEqual(creatable)
	})
})
