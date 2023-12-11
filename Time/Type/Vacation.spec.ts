import { weekmeter } from "../../index"

describe("Time.Type.Vacation", () => {
	it("type", () => {
		const type: weekmeter.Time.Type.Vacation = weekmeter.Time.Type.Vacation.value
		expect(weekmeter.Time.Type.Vacation.is(type)).toEqual(true)
		expect(weekmeter.Time.Type.Vacation.is("type")).toEqual(false)
		expect(weekmeter.Time.Type.Vacation.type.get("type")).toEqual(undefined)
	})
})
