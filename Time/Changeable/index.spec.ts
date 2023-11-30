import { isoly } from "isoly"
import { weekmeter } from "../../index"
import * as fixtures from "../fixtures"

describe("Time.Changeable", () => {
	it("is", () => {
		const times = fixtures.create(1)
		times.forEach(time => expect(weekmeter.Time.is(time)).toEqual(true))
		times.forEach(time => expect(weekmeter.Time.type.get(time)).toEqual(time))
	})
	it("get", () => {
		const times = fixtures.create(1)
		times.forEach(time => expect(weekmeter.Time.type.get(time)).toEqual(time))
	})
	it("scope", () => {
		const now = isoly.Date.now()
		const times = fixtures.create(21)
		const scoped = weekmeter.Time.scope(times, "------o1", "jessie@rocket.com")
		expect(times.find(time => time == scoped.sick?.[now])).toBeTruthy()
		expect(times.find(time => time == scoped.unpaid?.[now])).toBeTruthy()
		expect(times.find(time => time == scoped.vab?.[now])).toBeTruthy()
		expect(times.find(time => time == scoped.vacation?.[now])).toBeTruthy()
		expect(times.find(time => time == scoped.work?.["------c1"]["------p1"]["------a1"][now])).toBeTruthy()
		console.log(times, scoped)
	})
	it("row", () => {
		const now = isoly.Date.now()
		const times = fixtures.create(5)
		const scoped = weekmeter.Time.scope(times, "------o1", "jessie@rocket.com")
		const rows = weekmeter.Time.row(scoped)
		expect(weekmeter.Time.row(times, "------o1", "jessie@rocket.com")).toEqual(rows)
		rows.forEach(row => expect(row[now]).toBeTruthy())
	})
})
