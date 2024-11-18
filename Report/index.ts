import { isly } from "isly"
import { Creatable as ReportCreatable } from "./Creatable"
import { Invoice as ReportInvoice } from "./Invoice"
import { Project as ReportProject } from "./Project"
import { Salary as ReportSalary } from "./Salary"
import { Type as ReportType } from "./Type"

export type Report = Report.Project | Report.Salary | Report.Invoice
export namespace Report {
	export import Invoice = ReportInvoice
	export import Creatable = ReportCreatable
	export import Project = ReportProject
	export import Salary = ReportSalary
	export import Type = ReportType

	export const type = isly.union<Report>(Project.type, Salary.type, Invoice.type)
	export const is = type.is
	export const flaw = type.flaw
}
