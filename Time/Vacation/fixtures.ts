import { isoly } from "isoly"
import { changeable } from "../Changeable/fixtures"
import type { Changeable } from "./Changeable"
import type { Vacation } from "./index"

export const vacation = Object.assign(createVacations, { changeable: createVacationChangeables })
function createVacationChangeables(n: number = 1): Changeable[] {
	return changeable("vacation", n).map<Changeable>((time, index) => ({
		...time,
		type: "vacation",
	}))
}
function createVacations(n: number = 1): Vacation[] {
	return createVacationChangeables(n).map<Vacation>(time => ({
		...time,
		type: "vacation",
		modified: { by: time.email, value: isoly.DateTime.now() },
	}))
}
