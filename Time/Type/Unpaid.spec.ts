import { weekmeter } from "../../index"

describe("Time.Type.Unpaid", () => {
	it("type", () => {
		const type: weekmeter.Time.Type.Unpaid = weekmeter.Time.Type.Unpaid.value
		expect(weekmeter.Time.Type.Unpaid.is(type)).toEqual(true)
		expect(weekmeter.Time.Type.Unpaid.is("type")).toEqual(false)
		expect(weekmeter.Time.Type.Unpaid.type.get("type")).toEqual(undefined)
	})
})
