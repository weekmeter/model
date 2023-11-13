import { weekmeter } from "../index"
import { Percentage } from "./Adjust/Percentage"
import { Span } from "./Adjust/Span"
import { Criteria } from "./Criteria"
import { Set } from "./Set"

describe("Base", () => {
	it("is", () => {
		const { criteria } = Criteria.parse("weekDay:Wednesday")
		expect(weekmeter.Rule.Base.is(new Span(criteria, { hours: 8 }))).toEqual(true)
		expect(weekmeter.Rule.Base.is(new Percentage(criteria, 0.8))).toEqual(true)
		expect(weekmeter.Rule.Base.is(new Set(criteria, { hours: 8 }))).toEqual(true)
		expect(weekmeter.Rule.Base.is(undefined)).toEqual(false)
	})
})
