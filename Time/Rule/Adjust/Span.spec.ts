import { weekmeter } from "../../../index"
import { Criteria } from "../Criteria"
import { State } from "../State"
import { Percentage } from "./Percentage"
import { Span } from "./Span"

describe("Rule.Adjust.Span", () => {
	const { criteria } = Criteria.parse("day:Wednesday")
	it("is", () => {
		const span = new Span(criteria, { hours: 8 })
		expect(Span.is(span)).toEqual(true)
		expect(Percentage.is(span)).toEqual(false)
	})
	it("evaluate", () => {
		const wednesday = State.create("2023-11-08", { email: "jessie@rocket.com" })
		const thursday = State.create("2023-11-09", { email: "jessie@rocket.com" })
		const time = { hours: 8 }
		expect(new Span(criteria, { hours: 2 }).evaluate(wednesday, time)).toEqual({ hours: 10 })
		expect(new Span(criteria, { hours: 0 }).evaluate(wednesday, time)).toEqual(time)
		expect(new Span(criteria, { minutes: 30 }).evaluate(wednesday, time)).toEqual({ hours: 8, minutes: 30 })
		expect(new Span(criteria, { minutes: 30 }).evaluate(wednesday, { ...time, minutes: 10 })).toEqual({
			hours: 8,
			minutes: 40,
		})
		expect(new Span(criteria, { minutes: -30 }).evaluate(wednesday, { ...time, minutes: 30 })).toEqual({
			hours: 8,
			minutes: 0,
		})
		expect(new Span(criteria, { hours: -2, minutes: -40 }).evaluate(wednesday, { ...time, minutes: 30 })).toEqual({
			hours: 6,
			minutes: -10,
		})

		// selectively filter not hitting
		expect(new Span(criteria, { minutes: 30 }).evaluate(thursday, time)).toEqual(time)
		// mutability
		expect(new Span(criteria, { hours: 0 }).evaluate(wednesday, time)).not.toBe(time)
		expect(new Span(criteria, { hours: 0 }).evaluate(thursday, time)).not.toBe(time)
	})
	it("toString", () => {
		expect(weekmeter.Time.Rule.parse("adjust 8h day:Wednesday")?.toString()).toEqual("adjust 8:00h day:Wednesday")
		expect(weekmeter.Time.Rule.parse("adjust 8:3h day:Wednesday")?.toString()).toEqual("adjust 8:03h day:Wednesday")
		expect(weekmeter.Time.Rule.parse("adjust 8:30h day:Wednesday")?.toString()).toEqual("adjust 8:30h day:Wednesday")
		expect(weekmeter.Time.Rule.parse("adjust 8:300h day:Wednesday")?.toString()).toEqual("adjust 8:300h day:Wednesday")
		expect(weekmeter.Time.Rule.parse("adjust 10:30h day:Wednesday")?.toString()).toEqual("adjust 10:30h day:Wednesday")
		expect(weekmeter.Time.Rule.parse("adjust 100:30h day:Wednesday")?.toString()).toEqual(
			"adjust 100:30h day:Wednesday"
		)
	})
})
