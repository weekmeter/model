import { isoly } from "isoly"
import { State } from "./State"

describe("Rule.State", () => {
	it("is", () => {
		const state: State = {
			date: "2023-01-01",
			year: "2023",
			month: ["1", "01"],
			day: ["1", "01", "Sunday"],
			week: ["52", "52"],
			user: "jessie@rocket.com",
		}
		expect(State.is(state)).toEqual(true)
	})
	it("create", () => {
		expect(State.create("2023-01-01", "jessie@rocket.com")).toEqual({
			date: "2023-01-01",
			year: "2023",
			month: ["1", "01"],
			day: ["1", "01", "Sunday"],
			week: ["52", "52"],
			user: "jessie@rocket.com",
		})
	})
	it("create is", () => {
		const user = "jessie@rocket.com"
		const dates = isoly.DateRange.toDates({ start: "2023-01-01", end: "2023-01-07" }, true)
		expect(dates.length).toEqual(7)
		const states = dates.map(date => State.create(date, user))
		states.forEach(state => expect(State.is(state)))
	})
})
