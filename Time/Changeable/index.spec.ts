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
		const organization = "------o1"
		const times = fixtures.create(21)
		const scoped = weekmeter.Time.scope(times)
		expect(times.find(time => time == scoped[organization]?.sick?.[now])).toBeTruthy()
		expect(times.find(time => time == scoped[organization]?.unpaid?.[now])).toBeTruthy()
		expect(times.find(time => time == scoped[organization]?.vab?.[now])).toBeTruthy()
		expect(times.find(time => time == scoped[organization]?.vacation?.[now])).toBeTruthy()
		expect(
			times.find(time => time == scoped[organization]?.work?.["------c1"]["------p1"]["------a1"][now])
		).toBeTruthy()
		console.log(times, scoped)
	})
	it("row", () => {
		const now = isoly.Date.now()
		const times = fixtures.create(5)
		const scoped = weekmeter.Time.scope(times)
		const rows = weekmeter.Time.row(scoped)
		expect(weekmeter.Time.row(times)).toEqual(rows)
		rows.forEach((row, index) => expect(row[isoly.Date.next(now, Math.trunc(index / 5))]).toBeTruthy())
	})
})
