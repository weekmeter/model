import { isoly } from "isoly"
import { Creatable as ProjectCreatable } from "./Creatable"

export interface Project extends Project.Creatable {
	modified: isoly.DateTime
	created: isoly.DateTime
}
export namespace Project {
	export type Creatable = ProjectCreatable
	export const Creatable = ProjectCreatable
}
