import { weekmeter } from "../../index"

describe("Report.Type", () => {
	it("is", () => {
		expect(weekmeter.Report.Type.is("salary")).toEqual(true)
		expect(weekmeter.Report.Type.is("not a type")).toEqual(false)
	})
})
