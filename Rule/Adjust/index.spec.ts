import { Criteria } from "../Criteria"
import { Set } from "../Set"
import { Adjust } from "./index"
import { Percentage } from "./Percentage"
import { Span } from "./Span"

describe("Rule.Adjust", () => {
	const { criteria } = Criteria.parse("weekDay:Wednesday")
	it("is", () => {
		expect(Adjust.is(new Percentage(criteria, 0.8))).toEqual(true)
		expect(Adjust.is(new Span(criteria, { hours: 8 }))).toEqual(true)
		expect(Adjust.is(new Set(criteria, { hours: 8 }))).toEqual(false)
	})
	it("create", () => {
		expect(Percentage.is(Adjust.create(criteria, 0.8))).toEqual(true)
		expect(Span.is(Adjust.create(criteria, { hours: 8 }))).toEqual(true)
	})
})
