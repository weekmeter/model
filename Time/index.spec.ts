import * as fixtures from "../fixtures"
import { weekmeter } from "../index"

describe("Time", () => {
	it("is", () => {
		const time = fixtures.getTime()
		expect(weekmeter.Time.is(time)).toEqual(true)
		expect(weekmeter.Time.is((({ organization, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.is({ ...time, value: "testing" })).toEqual(false)
	})

	it("get", () => {
		const time = { ...fixtures.getTime(), from: "Testing" }
		expect(weekmeter.Time.type.get(time)).toEqual(fixtures.getTime())
		expect(weekmeter.Time.type.get({ balance: "asd" })).toEqual(undefined)
	})
})

describe("creatable", () => {
	it("is", () => {
		const creatable = fixtures.getTime.creatable()
		expect(weekmeter.Time.Creatable.is(creatable)).toEqual(true)
		expect(weekmeter.Time.Creatable.is((({ organization, ...creatable }) => creatable)(creatable))).toEqual(false)
		expect(weekmeter.Time.Creatable.is({ ...creatable, value: "testing" })).toEqual(false)
	})

	it("get", () => {
		const creatable = { ...fixtures.getTime.creatable(), from: "Testing" }
		expect(weekmeter.Time.Creatable.type.get(creatable)).toEqual(fixtures.getTime.creatable())
		expect(weekmeter.Time.Creatable.type.get({ balance: "asd" })).toEqual(undefined)
	})
})

describe("changeable", () => {
	it("is", () => {
		const changeable = fixtures.getTime.changeable()
		expect(weekmeter.Time.Changeable.is(changeable)).toEqual(true)
		expect(weekmeter.Time.Changeable.is((({ value, ...changeable }) => changeable)(changeable))).toEqual(false)
		expect(weekmeter.Time.Changeable.is({ ...changeable, value: "testing" })).toEqual(false)
	})

	it("get", () => {
		const changeable = { ...fixtures.getTime.changeable(), from: "Testing" }
		expect(weekmeter.Time.Changeable.type.get(changeable)).toEqual(fixtures.getTime.changeable())
		expect(weekmeter.Time.Changeable.type.get({ balance: "asd" })).toEqual(undefined)
	})
})
