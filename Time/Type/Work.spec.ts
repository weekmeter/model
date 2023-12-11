import { weekmeter } from "../../index"

describe("Time.Type.Work", () => {
	it("type", () => {
		const type: weekmeter.Time.Type.Work = weekmeter.Time.Type.Work.value
		expect(weekmeter.Time.Type.Work.is(type)).toEqual(true)
		expect(weekmeter.Time.Type.Work.is("type")).toEqual(false)
		expect(weekmeter.Time.Type.Work.type.get("type")).toEqual(undefined)
	})
})
