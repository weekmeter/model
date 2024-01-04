// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isly } from "isly"
import { Creatable as ReportCreatable } from "./Creatable"
import { Salary as ReportSalary } from "./Salary"
import { Type as ReportType } from "./Type"

export type Report = Report.Salary
export namespace Report {
	export type Type = ReportType
	export const Type = ReportType
	export type Creatable = ReportCreatable
	export const Creatable = ReportCreatable
	export namespace Creatable {
		export type Salary = ReportCreatable.Salary
	}
	export type Salary = ReportSalary
	export const Salary = ReportSalary
	export namespace Salary {
		export type Creatable = ReportSalary.Creatable
	}
	export const type = Report.Salary.type
	export const is = type.is
	export const flaw = type.flaw
}
