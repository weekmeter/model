import { weekmeter } from "../../index"
import * as fixtures from "./fixtures"

describe("Time.Parental.Changeable", () => {
	it("type", () => {
		const [creatable]: weekmeter.Time.Parental.Changeable[] = fixtures.create.changeable(1)
		const [time] = fixtures.create(1)
		expect(weekmeter.Time.Parental.Changeable.is(creatable)).toEqual(true)
		expect(weekmeter.Time.Parental.Changeable.is((({ type, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Parental.Changeable.is((({ date, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Parental.Changeable.is((({ email, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Parental.Changeable.is((({ organization, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Parental.Changeable.is((({ value, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Parental.Changeable.type.get(creatable)).toEqual(creatable)
		expect(weekmeter.Time.Parental.Changeable.type.get(time)).toEqual(creatable)
	})
})
