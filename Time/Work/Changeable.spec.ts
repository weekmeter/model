import { fixtures } from "../../fixtures"
import { weekmeter } from "../../index"

describe("Time.Work.Changeable", () => {
	it("type", () => {
		const [creatable]: weekmeter.Time.Work.Changeable[] = fixtures.time
			.changeable(1)
			.filter(weekmeter.Time.Work.Changeable.is)
		const [time] = fixtures.time(1).filter(weekmeter.Time.Work.is)
		expect(weekmeter.Time.Work.Changeable.is(creatable)).toEqual(true)
		expect(weekmeter.Time.Work.Changeable.is((({ type, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Work.Changeable.is((({ date, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Work.Changeable.is((({ email, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Work.Changeable.is((({ organization, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Work.Changeable.is((({ value, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Work.Changeable.type.get(creatable)).toEqual(creatable)
		expect(weekmeter.Time.Work.Changeable.type.get(time)).toEqual(creatable)
	})
})
