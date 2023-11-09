import { weekmeter } from "../index"
import { Adjust } from "./Adjust"
import { Percentage } from "./Adjust/Percentage"
import { Span } from "./Adjust/Span"
import { Criteria } from "./Criteria"
import { Set } from "./Set"

describe("Rule", () => {
	it("is", () => {
		const { criteria } = Criteria.parse("weekDay:Wednesday")
		expect(weekmeter.Rule.is(new Span(criteria, { hours: 8 }))).toEqual(true)
		expect(weekmeter.Rule.is(new Percentage(criteria, 0.8))).toEqual(true)
		expect(weekmeter.Rule.is(new Set(criteria, { hours: 8 }))).toEqual(true)
		expect(weekmeter.Rule.is(undefined)).toEqual(false)
	})
	it("parse", () => {
		const span = weekmeter.Rule.parse("adjust 8h weekDay:Wednesday")
		const percentage = weekmeter.Rule.parse("set 80% weekDay:Wednesday")
		const set = weekmeter.Rule.parse("set 8h weekDay:Wednesday")
		const notSupported = weekmeter.Rule.parse("set 80% weekDay:Wednesday")
		expect(Adjust.is(span)).toEqual(true)
		expect(Adjust.is(percentage)).toEqual(true)
		expect(Span.is(span)).toEqual(true)
		expect(Percentage.is(percentage)).toEqual(true)
		expect(Set.is(set)).toEqual(true)
		expect(notSupported).toEqual(undefined)
	})
	it("multi evaluate", () => {
		// const rules = [
		// 	"set 8h weekDay:Monday",
		// 	"set 8h weekday:Tuesday",
		// 	"set 8h weekday:Wednesday",
		// 	"set 8h weekday:Thursday",
		// 	"set 8h weekday:Friday",
		// ]
		// 	.map(weekmeter.Rule.parse)
		// 	.reduce((result: weekmeter.Rule[], rule) => (rule ? result.concat(rule) : result), [])
		// const states = isoly.DateRange.toDates({ start: "2023-01-01", end: "2023-01-07" }, true).map(date =>
		// 	weekmeter.Rule.State.create(date, "jessie@rocket.com")
		// )
		// states.reduce<isoly.DateRange>(
		// 	(result, state) => result + rules.reduce<isoly.DateRange>((result, rule) => result + rule.evaluate(state), {}),
		// 	{}
		// )
		// isoly.DateTime.
	})
})
