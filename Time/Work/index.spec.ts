import { isoly } from "isoly"
import { weekmeter } from "../../index"
import * as fixtures from "./fixtures"

describe("Time", () => {
	it("is", () => {
		const [time]: weekmeter.Time.Work[] = fixtures.create()
		expect(weekmeter.Time.Work.is(time)).toEqual(true)
		expect(weekmeter.Time.Work.is({ ...time, type: "sick" })).toEqual(false)
		expect(weekmeter.Time.Work.is((({ client, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Work.is((({ project, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Work.is((({ activity, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Work.is((({ email, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Work.is((({ organization, ...time }) => time)(time))).toEqual(false)
		expect(weekmeter.Time.Work.is((({ date, ...time }) => time)(time))).toEqual(false)
	})

	it("get", () => {
		const [time] = fixtures.create()
		expect(weekmeter.Time.type.get({ ...time, from: "Testing" })).toEqual(time)
		expect(weekmeter.Time.type.get({ balance: "asd" })).toEqual(undefined)
	})
	it("key", () => {
		const [time] = fixtures.create(1)
		expect(weekmeter.Time.Work.key(time)).toEqual(weekmeter.Time.Work.Changeable.key(time))
	})
})

describe("Changeable", () => {
	it("is", () => {
		const [changeable] = fixtures.create.changeable()
		expect(weekmeter.Time.Work.Changeable.is(changeable)).toEqual(true)
		expect(weekmeter.Time.Changeable.is((({ organization, ...changeable }) => changeable)(changeable))).toEqual(false)
		expect(weekmeter.Time.Changeable.is({ ...changeable, value: "testing" })).toEqual(false)
	})

	it("get", () => {
		const [changeable] = fixtures.create.changeable()
		const creatable = { ...changeable, from: "Testing" }
		expect(weekmeter.Time.Work.Changeable.type.get(creatable)).toEqual(changeable)
		expect(weekmeter.Time.Work.Changeable.type.get({ balance: "asd" })).toEqual(undefined)
	})
	it("key", () => {
		const now = isoly.Date.now()
		const [time] = fixtures.create.changeable()
		expect(weekmeter.Time.Work.Changeable.key(time)).toEqual(
			`------o1|jessie@rocket.com|${now}|work|------c1|------p1|------a1`
		)
	})
})
