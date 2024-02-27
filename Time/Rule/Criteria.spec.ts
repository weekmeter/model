import { selectively } from "selectively"
import { Criteria } from "./Criteria"

describe("Rule.Criteria", () => {
	it("parse", () => {
		const { criteria } = Criteria.parse("weekday:Wednesday")
		expect(criteria instanceof selectively.Rule)
	})
	it("is", () => {
		const { criteria } = Criteria.parse("weekday:Wednesday")
		expect(Criteria.is(criteria)).toEqual(true)
	})
})
