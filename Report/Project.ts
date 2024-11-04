import { isly } from "isly"
import { Time } from "../Time"
import { Base } from "./Base"
import { Project as ProjectCreatable } from "./Creatable/Project"

export type Project = {
	time: Time.Work[]
} & Base &
	Project.Creatable
export namespace Project {
	export import Creatable = ProjectCreatable
	export const type = isly.intersection<Project, Omit<Project, keyof Base | keyof Creatable>, Base, Creatable>(
		isly.object<Omit<Project, keyof Base | keyof Creatable>>({ time: isly.array(Time.Work.type) }),
		Base.type,
		Creatable.type
	)
	export const is = type.is
	export const flaw = type.flaw
}
