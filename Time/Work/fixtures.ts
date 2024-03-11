import { isoly } from "isoly"
import { changeable } from "../Changeable/fixtures"
import { Changeable } from "./Changeable"
import { Work } from "./index"

export const work = Object.assign(createWorks, { changeable: createWorkCreatables })
function createWorkCreatables(n: number = 1): Changeable[] {
	return changeable("work", n).map<Changeable>((time, index) => ({
		...time,
		type: "work",
		client: `c${(index % 5) + 1}`.padStart(8, "-"),
		project: `p${(index % 3) + 1}`.padStart(8, "-"),
		activity: `a${(index % 2) + 1}`.padStart(8, "-"),
	}))
}
function createWorks(n: number = 1): Work[] {
	return createWorkCreatables(n).map<Work>(time => ({
		...time,
		modified: { by: time.email, value: isoly.DateTime.now() },
	}))
}
