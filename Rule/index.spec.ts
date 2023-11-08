import { weekmeter } from "../index"

describe("Rule", () => {
	it("expected", () => {
		const rules: weekmeter.Rule[] = [
			{
				expected: { hours: 8 },
				criteria: ["weekDay:Wednesday"],
			},
		]
		expect(weekmeter.Rule.expected("2023-11-08", rules)).toEqual({ hours: 8 })
		expect(weekmeter.Rule.expected("2023-11-07", rules)).toEqual({})
	})
})
