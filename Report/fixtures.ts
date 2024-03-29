import * as modified from "../Modified/fixtures"
import * as times from "../Time/fixtures"
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
}
