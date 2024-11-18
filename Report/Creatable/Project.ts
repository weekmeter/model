import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Code } from "../../Code"
import { Type } from "../Type"

export interface Project {
	type: Type.Project
	client: Code
	project?: Code
	activity?: Code
	dates: isoly.DateRange
	email?: userwidgets.Email
}
export namespace Project {
	export const type = isly.object<Project>({
		type: Type.Project.type,
		client: Code.type,
		project: Code.type.optional(),
		activity: Code.type.optional(),
		dates: isly.fromIs("isoly.DateRange", isoly.DateRange.is),
		email: userwidgets.Email.type.optional(),
	})
	export const is = type.is
	export const flaw = type.flaw
}
