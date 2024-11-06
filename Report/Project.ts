import { isly } from "isly"
import { Time } from "../Time"
import { Base } from "./Base"
import { Project as Creatable } from "./Creatable/Project"

export type Project = {
	times: Time.Work[]
} & Base &
	Creatable
export namespace Project {
	export const type = isly.intersection<Project, Omit<Project, keyof Base | keyof Creatable>, Base, Creatable>(
		isly.object<Omit<Project, keyof Base | keyof Creatable>>({ times: isly.array(Time.Work.type) }),
		Base.type,
		Creatable.type
	)
	export const is = type.is
	export const flaw = type.flaw
}
