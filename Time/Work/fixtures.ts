import { isoly } from "isoly"
import * as fixtures from "../Changeable/fixtures"
import { Changeable } from "./Changeable"
import { Work } from "./index"

export const create = Object.assign({}, { work: createWorks, creatable: createWorkCreatables })
function createWorkCreatables(n: number = 1): Changeable[] {
	return fixtures.createChangeableBases("work", n).map<Changeable>((time, index) => ({
		...time,
		type: "work",
		client: `c${(index % 5) + 1}`.padStart(8, "-"),
		project: `p${(index % 3) + 1}`.padStart(8, "-"),
		activity: `a${(index % 2) + 1}`.padStart(8, "-"),
	}))
}
function createWorks(n: number = 1): Work[] {
	return createWorkCreatables(n).map<Work>(work => ({
		...work,
		modified: { by: work.email, value: isoly.DateTime.now() },
	}))
}
