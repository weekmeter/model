import { weekmeter } from "../../index"

describe("Time.Type.Vab", () => {
	it("type", () => {
		const type: weekmeter.Time.Type.Vab = weekmeter.Time.Type.Vab.value
		expect(weekmeter.Time.Type.Vab.is(type)).toEqual(true)
		expect(weekmeter.Time.Type.Vab.is("type")).toEqual(false)
		expect(weekmeter.Time.Type.Vab.type.get("type")).toEqual(undefined)
	})
})
