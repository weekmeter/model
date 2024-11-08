import { isoly } from "isoly"
import { isly } from "isly"
import { Code } from "../../Code"
import { Type } from "../Type"

export interface Project {
	type: Type.Project
	client: Code
	project: Code
	dates: isoly.DateRange
}
export namespace Project {
	export const type = isly.object<Project>({
		type: Type.Project.type,
		client: Code.type,
		project: Code.type,
		dates: isly.fromIs("isoly.DateRange", isoly.DateRange.is),
	})
	export const is = type.is
	export const flaw = type.flaw
}
