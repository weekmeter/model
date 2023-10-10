import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { Creatable as ProjectCreatable } from "./Creatable"

export interface Project extends Project.Creatable {
	modified: { value: isoly.DateTime; by: userwidgets.Email }
}
export namespace Project {
	export type Creatable = ProjectCreatable
	export const Creatable = ProjectCreatable
}
