import { isoly } from "isoly"
// import * as fixtures from "../../fixtures"
import { weekmeter } from "../../index"
import * as fixtures from "./fixtures"

describe("Time", () => {
	it("is", () => {
		const [time]: weekmeter.Time.Work[] = fixtures.create.work()
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
		const [time] = fixtures.create.work()
		expect(weekmeter.Time.type.get({ ...time, from: "Testing" })).toEqual(time)
		expect(weekmeter.Time.type.get({ balance: "asd" })).toEqual(undefined)
	})
	it("scope", () => {
		const now = isoly.Date.now()
		const times = fixtures.create.work(210) // maximum "unique" times produced by fixture
		const scoped = weekmeter.Time.scope(times)
		expect(weekmeter.Time.Scoped.is(scoped)).toEqual(true)
		expect(times.length).toEqual(210)
		expect(times[0]).toBe(scoped["------o1"]["------c1"]["------p1"]["------a1"][now])
		expect(times[times.length - 1]).toBe(
			scoped["------o7"]["------c5"]["------p3"]["------a2"][isoly.Date.next(now, 209)]
		)
	})
	it("fromScope", () => {
		const times = fixtures.getTimes(210)
		const scoped = weekmeter.Time.scope(times)
		const result = weekmeter.Time.fromScope(scoped)
		expect(times.length).toEqual(result.length)
		for (const time of result)
			expect(times.includes(time)).toEqual(true)
	})

	it("row", () => {
		const times = fixtures.getTimesWeek(5)
		const scoped = weekmeter.Time.scope(times)
		const rowFromTimes = weekmeter.Time.row(times)
		const rowFromScoped = weekmeter.Time.row(scoped)
		expect(rowFromTimes).toEqual(rowFromScoped)
	})
	it("key", () => {
		const [time] = fixtures.getTimes(1)
		expect(weekmeter.Time.key(time)).toEqual(weekmeter.Time.Changeable.key(time))
	})
})

describe("Creatable", () => {
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

describe("Changeable", () => {
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
	it("key", () => {
		const now = isoly.Date.now()
		const [time] = fixtures.getTimes(1)
		expect(weekmeter.Time.Changeable.key(time)).toEqual(`------o1|jessie@rocket.com|${now}|------c1|------p1|------a1`)
	})
})
