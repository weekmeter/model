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
	export type Changeable = ProjectChangeable
	export const Changeable = ProjectChangeable
	export type Creatable = ProjectCreatable
	export const Creatable = ProjectCreatable
	export type Access = ProjectAccess
	export const Access = ProjectAccess
	export namespace Access {
		export type Rule = ProjectAccess.Rule
		export namespace Rule {
			export type Type = ProjectAccess.Rule.Type
			export namespace Type {
				export type Work = ProjectAccess.Rule.Type.Work
				export type View = ProjectAccess.Rule.Type.View
				export type Admin = ProjectAccess.Rule.Type.Admin
			}
		}
		export type Engine = ProjectAccess.Engine
		export namespace Engine {
			export type State = ProjectAccess.Engine.State
			export type Rule = ProjectAccess.Engine.Rule
		}
	}

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
