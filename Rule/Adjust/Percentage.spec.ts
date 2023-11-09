import { Criteria } from "../Criteria"
import { State } from "../State"
import { Percentage } from "./Percentage"
import { Span } from "./Span"

describe("Rule.Adjust.Percentage", () => {
	const { criteria } = Criteria.parse("weekDay:Wednesday")
	it("is", () => {
		const percentage = new Percentage(criteria, 0.8)
		expect(Percentage.is(percentage)).toEqual(true)
		expect(Span.is(percentage)).toEqual(false)
	})
	it("evaluate", () => {
		const wednesday = State.create("2023-11-08", "jessie@rocket.com")
		const thursday = State.create("2023-11-09", "jessie@rocket.com")
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
})
