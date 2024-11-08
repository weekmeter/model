import { isoly } from "isoly"
import { isly } from "isly"
import { Time } from "../Time"
import { Base } from "./Base"
import { Project as ProjectCreatable } from "./Creatable/Project"

export type Project = {
	times: Time.Work[]
} & Base &
	Project.Creatable
export namespace Project {
	export import Creatable = ProjectCreatable
	export const type = isly.intersection<Project, Omit<Project, keyof Base | keyof Creatable>, Base, Creatable>(
		isly.object<Omit<Project, keyof Base | keyof Creatable>>({ times: isly.array(Time.Work.type) }),
		Base.type,
		Creatable.type
	)
	export const is = type.is
	export const flaw = type.flaw

	export function csv(report: Project): File {
		const header = "organization,client,project,activity,email,date,time\n"
		const rows: string = report.times
			.map(time => {
				const hours = isoly.TimeSpan.toHours(time.value)
				return hours != 0
					? `${time.organization},${time.client},${time.project},${time.activity},${time.email},${
							time.date
					  },${hours.toFixed(2)}`
					: ""
			})
			.join(`\n`)
		return new File(
			[header, rows],
			`${report.dates.start}-${report.dates.end}_${report.client}_${report.project}.csv`,
			{
				type: "text/csv",
				lastModified: isoly.DateTime.epoch(report.modified.value),
			}
		)
	}
}
