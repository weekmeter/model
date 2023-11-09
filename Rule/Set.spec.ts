import { Adjust } from "./Adjust"
import { Criteria } from "./Criteria"
import { Set } from "./Set"
import { State } from "./State"

describe("Rule.Set", () => {
	const { criteria } = Criteria.parse("weekDay:Wednesday")
	it("is", () => {
		const set = new Set(criteria, { hours: 8 })
		expect(Set.is(set)).toEqual(true)
		expect(Adjust.is(set)).toEqual(false)
	})
	it("evaluate", () => {
		const wednesday = State.create("2023-11-08", "jessie@rocket.com")
		const thursday = State.create("2023-11-09", "jessie@rocket.com")
		const time = { hours: 8 }
		expect(new Set(criteria, { hours: 7, minutes: 30 }).evaluate(wednesday, time)).toEqual({ hours: 7, minutes: 30 })
		expect(new Set(criteria, { hours: 7, minutes: 30 }).evaluate(wednesday, { hours: 9, minutes: 40 })).toEqual({
			hours: 7,
			minutes: 30,
		})

		// selectively filter not hitting
		expect(new Set(criteria, { hours: 7, minutes: 30 }).evaluate(thursday, time)).toEqual(time)

		// mutability
		expect(new Set(criteria, { hours: 8 }).evaluate(wednesday, {})).not.toBe(time)
		expect(new Set(criteria, { hours: 8 }).evaluate(thursday, {})).not.toBe(time)
	})
})
