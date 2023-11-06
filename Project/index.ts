import { isly } from "isly"
import { Modified } from "../Modified"
import { Creatable as ProjectCreatable } from "./Creatable"

export interface Project extends Project.Creatable {
	modified: Modified
}
export namespace Project {
	export type Creatable = ProjectCreatable
	export const Creatable = ProjectCreatable
	export const type: isly.object.ExtendableType<Project> = Creatable.type.extend<Project>({ modified: Modified.type })
	export const is = type.is
	export const flaw = type.flaw
	export const key = Creatable.key
}
