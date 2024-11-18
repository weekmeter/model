import { isly } from "isly"
import { Invoice as TypeInvoice } from "./Invoice"
import { Project as TypeProject } from "./Project"
import { Salary as TypeSalary } from "./Salary"

export type Type = Type.Project | Type.Salary | Type.Invoice
export namespace Type {
	export import Project = TypeProject
	export import Salary = TypeSalary
	export import Invoice = TypeInvoice
	export const type = isly.union<Type>(Project.type, Salary.type, Invoice.type)
	export const is = type.is
	export const flaw = type.flaw
}
