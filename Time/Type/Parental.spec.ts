import { weekmeter } from "../../index"

describe("Time.Type.Parental", () => {
	it("type", () => {
		const type: weekmeter.Time.Type.Parental = weekmeter.Time.Type.Parental.value
		expect(weekmeter.Time.Type.Parental.is(type)).toEqual(true)
		expect(weekmeter.Time.Type.Parental.is("type")).toEqual(false)
		expect(weekmeter.Time.Type.Parental.type.get("type")).toEqual(undefined)
	})
})
