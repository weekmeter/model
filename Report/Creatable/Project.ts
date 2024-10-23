import { isoly } from "isoly"
import { isly } from "isly"
import { Client } from "../../Client"
import { Code } from "../../Code"
import { Type } from "../Type"
export interface Project {
	type: Type.Project
	client: Client["code"]
	dates: isoly.DateRange
	adjustment?: isoly.TimeSpan //can this be negative?
}

export namespace Project {
	export const type = isly.object<Project>({
		type: Type.Project.type,
		client: Code.type,
		dates: isly.fromIs("Isoly.DateRange", isoly.DateRange.is),
		adjustment: isly.fromIs("Isoly.TimeSpan", isoly.TimeSpan.is).optional(),
	})
	export const is = type.is
	export const flaw = type.flaw
}
