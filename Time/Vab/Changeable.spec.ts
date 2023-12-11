import { weekmeter } from "../../index"
import * as fixtures from "./fixtures"

describe("Time.Vab.Changeable", () => {
	it("type", () => {
		const [creatable]: weekmeter.Time.Vab.Changeable[] = fixtures.create.changeable(1)
		const [time] = fixtures.create(1)
		expect(weekmeter.Time.Vab.Changeable.is(creatable)).toEqual(true)
		expect(weekmeter.Time.Vab.Changeable.is((({ type, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Vab.Changeable.is((({ date, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Vab.Changeable.is((({ email, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Vab.Changeable.is((({ organization, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Vab.Changeable.is((({ value, ...time }) => time)(creatable))).toEqual(false)
		expect(weekmeter.Time.Vab.Changeable.type.get(creatable)).toEqual(creatable)
		expect(weekmeter.Time.Vab.Changeable.type.get(time)).toEqual(creatable)
	})
})
