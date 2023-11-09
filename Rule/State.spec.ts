import { isoly } from "isoly"
import { weekmeter } from "../index"

describe("Rule.State", () => {
	it("is", () => {
		const state: weekmeter.Rule.State = {
			date: "2023-01-01",
			year: "2023",
			month: "1",
			day: "1",
			week: "52",
			weekDay: "Sunday",
			user: "jessie@rocket.com",
		}
		expect(weekmeter.Rule.State.is(state))
	})
	it("create", () => {
		expect(weekmeter.Rule.State.create("2023-01-01", "jessie@rocket.com")).toEqual({
			date: "2023-01-01",
			year: "2023",
			month: "1",
			day: "1",
			week: "52",
			weekDay: "Sunday",
			user: "jessie@rocket.com",
		})
	})
	it("create is", () => {
		const user = "jessie@rocket.com"
		const dates = isoly.DateRange.toDates({ start: "2023-01-01", end: "2023-01-07" }, true)
		expect(dates.length).toEqual(7)
		const states = dates.map(date => weekmeter.Rule.State.create(date, user))
		console.log("State 0", states.at(0))
		for (const state of states)
			expect(weekmeter.Rule.State.is(state))
	})
})
