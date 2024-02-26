import { isoly } from "isoly"
import { changeable } from "../Changeable/fixtures"
import type { Changeable } from "./Changeable"
import type { Sick } from "./index"

export const sick = Object.assign(createSicks, { changeable: createSickChangeables })
function createSickChangeables(n: number = 1): Changeable[] {
	return changeable("sick", n).map<Changeable>(time => ({
		...time,
		type: "sick",
	}))
}
function createSicks(n: number = 1): Sick[] {
	return createSickChangeables(n).map<Sick>(time => ({
		...time,
		type: "sick",
		modified: { by: time.email, value: isoly.DateTime.now() },
	}))
}
