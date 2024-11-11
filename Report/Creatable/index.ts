import { isly } from "isly"
import { Invoice as CreatableInvoice } from "./Invoice"
import { Project as CreatableProject } from "./Project"
import { Salary as CreatableSalary } from "./Salary"

export type Creatable = Creatable.Project | Creatable.Salary | Creatable.Invoice
export namespace Creatable {
	export import Project = CreatableProject
	export import Salary = CreatableSalary
	export import Invoice = CreatableInvoice
	export const type = isly.union<Creatable>(CreatableSalary.type, CreatableProject.type)
	export const is = type.is
	export const flaw = type.flaw
}
