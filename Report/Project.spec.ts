import { File } from "fetch-blob/file"
import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

globalThis.File = File

describe("Report.Project", () => {
	it("is", () => {
		const report: weekmeter.Report.Project = fixtures.report.project()
		expect(weekmeter.Report.Project.is(report)).toEqual(true)
	})
	it("csv", async () => {
		const report: weekmeter.Report.Project = fixtures.report.project()
		const csv: File = weekmeter.Report.Project.csv(report)
		expect(await csv.text()).toEqual(
			"organization,client,project,activity,email,date,time\n------o1,------c1,------p1,------a1,jessie@rocket.com,2024-11-08,8.00"
		) // I need to compare the file contents. Break out the csv into its own variable"
	})
})
