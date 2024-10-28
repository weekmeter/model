// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isly } from "isly"
import { Project as TypeProject } from "./Project"
import { Salary as TypeSalary } from "./Salary"
export type Type = Type.Project | Type.Salary
export namespace Type {
	export import Project = TypeProject
	export import Salary = TypeSalary
	export const type = isly.union<Type>(Project.type, Salary.type)
	export const is = type.is
	export const flaw = type.flaw
}
