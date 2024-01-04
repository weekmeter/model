import * as fixtures from "../fixtures"
import { weekmeter } from "../index"

describe("Report", () => {
	it("is", () => {
		const reports: weekmeter.Report[] = [fixtures.getReport.salary()]
		reports.forEach(report => expect(weekmeter.Report.is(report)).toEqual(true))
	})
})
