import { weekmeter } from "../../../index"
import { Criteria } from "../Criteria"
import { State } from "../State"
import { Percentage } from "./Percentage"
import { Span } from "./Span"

describe("Rule.Adjust.Percentage", () => {
	const { criteria } = Criteria.parse("day:Wednesday")
	it("is", () => {
		const percentage = new Percentage(criteria, 0.8)
		expect(Percentage.is(percentage)).toEqual(true)
		expect(Span.is(percentage)).toEqual(false)
	})
	it("evaluate", () => {
		const wednesday = State.create("2023-11-08", { email: "jessie@rocket.com" })
		const thursday = State.create("2023-11-09", { email: "jessie@rocket.com" })
		const time = { hours: 8 }
		expect(new Percentage(criteria, 1).evaluate(wednesday, time)).toEqual(time)
		expect(new Percentage(criteria, 0.8).evaluate(wednesday, { hours: 10 })).toEqual({ hours: 8 })
		expect(new Percentage(criteria, 0.8).evaluate(wednesday, { hours: 10, minutes: 40 })).toEqual({
			hours: 8,
			minutes: 32,
		})

		// selectively filter not hitting
		expect(new Percentage(criteria, 1).evaluate(thursday, time)).toEqual(time)
		// mutability
		expect(new Percentage(criteria, 1).evaluate(wednesday, time)).not.toBe(time)
		expect(new Percentage(criteria, 1).evaluate(thursday, time)).not.toBe(time)
	})
	it("toString", () => {
		expect(weekmeter.Time.Rule.parse("adjust 80% day:Wednesday")?.toString()).toEqual("adjust 80% day:Wednesday")
		expect(weekmeter.Time.Rule.parse("adjust 80.2% day:Wednesday")?.toString()).toEqual("adjust 80.2% day:Wednesday")
		expect(weekmeter.Time.Rule.parse("adjust 80.02% day:Wednesday")?.toString()).toEqual("adjust 80.02% day:Wednesday")
		expect(weekmeter.Time.Rule.parse("adjust 8% day:Wednesday")?.toString()).toEqual("adjust 8% day:Wednesday")
		expect(weekmeter.Time.Rule.parse("adjust 8.20% day:Wednesday")?.toString()).toEqual("adjust 8.2% day:Wednesday")
		expect(weekmeter.Time.Rule.parse("adjust 8.0% day:Wednesday")?.toString()).toEqual("adjust 8% day:Wednesday")
	})
})
