import { isoly } from "isoly"
import { isly } from "isly"
import { Type } from "../Type"

export interface Salary {
	type: Type.Salary
	range: isoly.DateRange
}
export namespace Salary {
	export const type = isly.object<Salary>({
		type: Type.Salary.type,
		range: isly.fromIs("isoly.DateRange", isoly.DateRange.is),
	})
}
