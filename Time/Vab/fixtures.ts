import { isoly } from "isoly"
import * as fixtures from "../Changeable/fixtures"
import type { Changeable } from "./Changeable"
import type { Vab } from "./index"
export const create = Object.assign(createVabs, { changeable: createVabChangeables })

function createVabChangeables(n: number = 1): Changeable[] {
	return fixtures.create("vab", n).map<Changeable>((time, index) => ({
		...time,
		type: "vab",
	}))
}
function createVabs(n: number = 1): Vab[] {
	return createVabChangeables(n).map<Vab>(time => ({
		...time,
		type: "vab",
		modified: { by: time.email, value: isoly.DateTime.now() },
	}))
}
