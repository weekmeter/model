import { isoly } from "isoly"
import { changeable } from "../Changeable/fixtures"
import type { Changeable } from "./Changeable"
import type { Unpaid } from "./index"

export const unpaid = Object.assign(createUnpaids, { changeable: createUnpaidChangeables })
function createUnpaidChangeables(n: number = 1): Changeable[] {
	return changeable("unpaid", n).map<Changeable>(time => ({
		...time,
		type: "unpaid",
	}))
}
function createUnpaids(n: number = 1): Unpaid[] {
	return createUnpaidChangeables(n).map<Unpaid>(time => ({
		...time,
		type: "unpaid",
		modified: { by: time.email, value: isoly.DateTime.now() },
	}))
}
