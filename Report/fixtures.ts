import * as modified from "../Modified/fixtures"
import * as times from "../Time/fixtures"
import { Project } from "./Project"
import { Salary } from "./Salary"

export const report = {
	salary: (): Salary => ({
		type: "salary",
		balance: { hours: 1 },
		dates: { start: "2024-01-01", end: "2024-12-31" },
		email: "jessie@rocket.com",
		modified: modified.modified(),
		...Salary.generate(times.time(5)),
	}),
	project: (): Project => ({
		type: "project",
		client: "clientcode",
		project: "projectcode",
		dates: { start: "2024-01-01", end: "2024-12-31" },
		times: [times.time.work()],
		modified: modified.modified(),
	}),
}
