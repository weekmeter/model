import { isoly } from "isoly"
import { isly } from "isly"
import { Client } from "../../Client"
import { Code } from "../../Code"
import { Type } from "../Type"
export interface Project {
	type: Type.Project
	client: Client["code"]
	date: { start: isoly.Date; end: isoly.Date } //dateRange: isoly.DateRange, instead?
}

export namespace Project {
	export const type = isly.object<Project>({
		type: Type.Project.type,
		client: Code.type,
		date: isly.object({
			start: isly.fromIs("Isoly.Date", isoly.Date.is),
			end: isly.fromIs("Isoly.Date", isoly.Date.is),
		}),
	})
	export const is = type.is
	export const flaw = type.flaw
}
