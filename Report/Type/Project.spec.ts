import { weekmeter } from "../../index"

describe("Report.Type.Project", () => {
	it("is", () => {
		expect(weekmeter.Report.Type.Project.is("project")).toEqual(true)
		expect(weekmeter.Report.Type.Project.is("not project")).toEqual(false)
	})
})
