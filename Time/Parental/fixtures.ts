import { isoly } from "isoly"
import { changeable } from "../Changeable/fixtures"
import type { Changeable } from "./Changeable"
import type { Parental } from "./index"

export const parental = Object.assign(createParentals, { changeable: createParentalChangeables })
function createParentalChangeables(n: number = 1): Changeable[] {
	return changeable("parental", n).map<Changeable>((time, index) => ({
		...time,
		type: "parental",
	}))
}
function createParentals(n: number = 1): Parental[] {
	return createParentalChangeables(n).map<Parental>(time => ({
		...time,
		type: "parental",
		modified: { by: time.email, value: isoly.DateTime.now() },
	}))
}
