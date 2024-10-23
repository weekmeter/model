import { isoly } from "isoly"
import { Time } from "../Time"
import { Base } from "./Base"
import { Project as ProjectCreatable } from "./Creatable/Project"
import { Times } from "./Times"

export type Project = { [type in Time.Type]: Times<Time & { type: type }> } & {
	total: isoly.TimeSpan
	dates: isoly.DateRange
} & Base

export namespace Project {
	export import Creatable = ProjectCreatable
}
