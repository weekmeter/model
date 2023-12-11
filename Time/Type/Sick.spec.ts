import { weekmeter } from "../../index"

describe("Time.Type.Sick", () => {
	it("type", () => {
		const type: weekmeter.Time.Type.Sick = weekmeter.Time.Type.Sick.value
		expect(weekmeter.Time.Type.Sick.is(type)).toEqual(true)
		expect(weekmeter.Time.Type.Sick.is("type")).toEqual(false)
		expect(weekmeter.Time.Type.Sick.type.get("type")).toEqual(undefined)
	})
})
