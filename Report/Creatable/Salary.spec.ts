import { weekmeter } from "../../index"

describe("Report.Creatable.Salary", () => {
	it("is", () => {
		const report: weekmeter.Report.Creatable.Salary = {
			date: "2023-12-31",
			type: "salary",
			email: "jessie@rocket.com",
			adjustment: { hours: 1 },
		}
		expect(weekmeter.Report.Creatable.Salary.is(report)).toEqual(true)
		expect(weekmeter.Report.Creatable.Salary.is((({ adjustment, ...report }) => report)(report))).toEqual(true)
		expect(weekmeter.Report.Creatable.Salary.is((({ date, ...report }) => report)(report))).toEqual(false)
		expect(weekmeter.Report.Creatable.Salary.is((({ email, ...report }) => report)(report))).toEqual(false)
		expect(weekmeter.Report.Creatable.Salary.is((({ type, ...report }) => report)(report))).toEqual(false)
	})
})
