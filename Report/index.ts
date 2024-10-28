// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isly } from "isly"
import { Creatable as ReportCreatable } from "./Creatable"
import { Project as ReportProject } from "./Project"
import { Salary as ReportSalary } from "./Salary"
import { Type as ReportType } from "./Type"

export type Report = Report.Project | Report.Salary
export namespace Report {
	export import Creatable = ReportCreatable
	export import Project = ReportProject
	export import Salary = ReportSalary
	export import Type = ReportType

	export const type = isly.union<Report>(Report.Project.type, Report.Salary.type)
	export const is = type.is
	export const flaw = type.flaw
}
