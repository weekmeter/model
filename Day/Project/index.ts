import { isly } from "isly"
import { NonWork as ProjectNonWork } from "./NonWork"
import { Work as ProjectWork } from "./Work"

export type Project = Project.NonWork | Project.Work
export namespace Project {
	export import NonWork = ProjectNonWork
	export import Work = ProjectWork
	export const type = isly.union<Project>(NonWork.type, Work.type)
	export const is = type.is
}
