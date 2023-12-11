import { weekmeter } from "../../index"
import * as fixtures from "./fixtures"

describe("Time.Work.Changeable", () => {
	it("type", () => {
		const [creatable]: weekmeter.Time.Work.Changeable[] = fixtures.create.changeable(1)
		const [time] = fixtures.create(1)
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
