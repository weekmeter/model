import { weekmeter } from "../../index"

describe("Time.Type", () => {
	it("type", () => {
		const types: weekmeter.Time.Type[] = weekmeter.Time.Type.value.slice()
		types.forEach(type => expect(weekmeter.Time.Type.is(type)).toEqual(true))
		expect(weekmeter.Time.Type.is("type")).toEqual(false)
		expect(weekmeter.Time.Type.type.get("type")).toEqual(undefined)
	})
})
