import { weekmeter } from "../../index"

describe("Report.Type.Salary", () => {
	it("is", () => {
		expect(weekmeter.Report.Type.Salary.is("salary")).toEqual(true)
		expect(weekmeter.Report.Type.Salary.is("not salary")).toEqual(false)
	})
})
