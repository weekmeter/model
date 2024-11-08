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
		)
		expect(csv.name).toEqual("2024-01-01-2024-12-31_clientcode_projectcode.csv")
		expect(csv.type).toEqual("text/csv")
	})
})
