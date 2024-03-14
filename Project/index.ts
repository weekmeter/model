import { isly } from "isly"
import { Activity } from "../Activity"
import { Client } from "../Client"
import { Modified } from "../Modified"
import { Access as ProjectAccess } from "./Access"
import { Changeable as ProjectChangeable } from "./Changeable"
import { Creatable as ProjectCreatable } from "./Creatable"

export interface Project extends Project.Creatable {
	client: Client
	activities: Activity[]
	access: Project.Access
	modified: Modified
}
export namespace Project {
	export import Changeable = ProjectChangeable
	export import Creatable = ProjectCreatable
	export import Access = ProjectAccess

	export const type: isly.object.ExtendableType<Project> = Creatable.type.extend<Project>({
		client: Client.type,
		activities: isly.array(Activity.type),
		access: ProjectAccess.type,
		modified: Modified.type,
	})
	export const is = type.is
	export const flaw = type.flaw
	export const key = Creatable.key
}
