import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

describe("Report.Salary", () => {
	it("is", () => {
		const report: weekmeter.Report.Salary = fixtures.report.salary()
		expect(weekmeter.Report.Project.is(report)).toEqual(true)
	})
	it("generate", () => {
		const times = fixtures.time(5)
		console.log("test times: ", times)
		const report = weekmeter.Report.Salary.generate(times)
	})
})
