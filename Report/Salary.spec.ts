import * as fixtures from "../fixtures"
import { weekmeter } from "../index"

describe("Report.Salary", () => {
	it("is", () => {
		const report: weekmeter.Report.Salary = fixtures.getReport.salary()
		expect(weekmeter.Report.Salary.is(report)).toEqual(true)
	})
	it("generate", () => {
		const times = fixtures.getTime(5)
		const report = weekmeter.Report.Salary.generate(times)
		expect(report.total).toEqual({ hours: 200 })
		expect(report.sick.times.length).toEqual(5)
		expect(report.unpaid.times.length).toEqual(5)
		expect(report.parental.times.length).toEqual(5)
		expect(report.vacation.times.length).toEqual(5)
		expect(Object.keys(report.work.clients).length).toEqual(5)
		expect(report.sick.total).toEqual({ hours: 40 })
		expect(report.unpaid.total).toEqual({ hours: 40 })
		expect(report.parental.total).toEqual({ hours: 40 })
		expect(report.vacation.total).toEqual({ hours: 40 })
		Object.values(report.work.clients).forEach(client => {
			expect(client.times.length).toEqual(1)
			expect(client.total).toEqual({ hours: 8 })
		})
	})
})
