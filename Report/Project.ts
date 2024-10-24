import { isoly } from "isoly"
import { isly } from "isly"
import { Code } from "../Code"
import { Modified } from "../Modified"
import { Base } from "./Base"
import { Project as ProjectCreatable } from "./Creatable/Project"
import { Type } from "./Type"

export type Project = {
	total: isoly.TimeSpan
	dates: isoly.DateRange
} & Base &
	Omit<Project.Creatable, "date">

export namespace Project {
	export import Creatable = ProjectCreatable
	export const type = isly.object<Project>({
		total: isly.fromIs("isoly.TimeSpan", isoly.TimeSpan.is),
		dates: isly.fromIs("isoly.DateRange", isoly.DateRange.is),
		modified: Modified.type,
		type: Type.Project.type,
		client: Code.type,
		adjustment: isly.fromIs("Isoly.TimeSpan", isoly.TimeSpan.is).optional(),
	})
}
