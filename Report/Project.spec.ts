import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

describe("Report.Salary", () => {
	it("is", () => {
		const report: weekmeter.Report.Project = fixtures.report.project()
		expect(weekmeter.Report.Project.is(report)).toEqual(true)
	})
})
