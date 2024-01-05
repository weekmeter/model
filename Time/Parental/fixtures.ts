import { isoly } from "isoly"
import * as fixtures from "../Changeable/fixtures"
import type { Changeable } from "./Changeable"
import type { Parental } from "./index"
export const create = Object.assign(createVabs, { changeable: createVabChangeables })

function createVabChangeables(n: number = 1): Changeable[] {
	return fixtures.create("parental", n).map<Changeable>((time, index) => ({
		...time,
		type: "parental",
	}))
}
function createVabs(n: number = 1): Parental[] {
	return createVabChangeables(n).map<Parental>(time => ({
		...time,
		type: "parental",
		modified: { by: time.email, value: isoly.DateTime.now() },
	}))
}
