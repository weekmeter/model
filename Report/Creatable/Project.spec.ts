import { weekmeter } from "../../index"

describe("Report.Creatable.Project", () => {
	it("is", () => {
		const report: weekmeter.Report.Creatable.Project = {
			type: "project",
			client: "giovanni",
			project: "pokemon-sourcing",
			dates: { start: "2023-12-01", end: "2023-12-31" },
		}

		expect(weekmeter.Report.Creatable.Project.is(report)).toEqual(true)
		expect(weekmeter.Report.Creatable.Project.is((({ project, ...report }) => report)(report))).toEqual(false)
		expect(weekmeter.Report.Creatable.Project.is((({ dates, ...report }) => report)(report))).toEqual(false)
		expect(weekmeter.Report.Creatable.Project.is((({ client, ...report }) => report)(report))).toEqual(false)
		expect(weekmeter.Report.Creatable.Project.is((({ type, ...report }) => report)(report))).toEqual(false)
	})
})
