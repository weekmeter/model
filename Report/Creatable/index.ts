import { Project as CreatableProject } from "./Project"
import { Salary as CreatableSalary } from "./Salary"

export type Creatable = Creatable.Salary | Creatable.Project
export namespace Creatable {
	export import Salary = CreatableSalary
	export import Project = CreatableProject
	export const type = CreatableSalary.type
	export const is = type.is
	export const flaw = type.flaw
}
