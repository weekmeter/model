import { weekmeter } from "../../index"
import * as fixtures from "./fixtures"

describe("Time.Sick.Changeable", () => {
	it("type", () => {
		const [creatable]: weekmeter.Time.Sick.Changeable[] = fixtures.create.changeable(1)
		const [time] = fixtures.create(1)
		expect(weekmeter.Time.Sick.Changeable.is(creatable)).toEqual(true)
		expect(weekmeter.Time.Sick.Changeable.is((({ type, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Sick.Changeable.is((({ date, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Sick.Changeable.is((({ email, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Sick.Changeable.is((({ organization, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Sick.Changeable.is((({ value, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Sick.Changeable.type.get(creatable)).toEqual(creatable)
		expect(weekmeter.Time.Sick.Changeable.type.get(time)).toEqual(creatable)
	})
})
