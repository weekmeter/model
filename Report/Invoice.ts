import { isoly } from "isoly"
import { isly } from "isly"
import { Time } from "../Time"
import { Base } from "./Base"
import { Invoice as InvoiceCreatable } from "./Creatable/Invoice"

export type Invoice = {
	times: Time.Work[]
	dates: isoly.DateRange
} & Base &
	Omit<Invoice.Creatable, "date">

export namespace Invoice {
	export import Creatable = InvoiceCreatable
	export const type = isly.intersection<
		Invoice,
		Omit<Invoice, keyof Base | keyof Creatable>,
		Base,
		Omit<Invoice.Creatable, "date">
	>(
		isly.object<Omit<Invoice, keyof Base | keyof Creatable>>({
			times: isly.array(Time.Work.type),
			dates: isly.fromIs("isoly.DateRange", isoly.DateRange.is),
		}),
		Base.type,
		Creatable.type.omit(["date"])
	)
	export const is = type.is
	export const flaw = type.flaw

	export function csv(report: Invoice): File {
		const header = "organization,client,project,activity,email,date,time\n"
		const rows: string = report.times
			.reduce<string[]>((result, time) => {
				const hours = isoly.TimeSpan.toHours(time.value)
				return result.concat(
					hours != 0
						? `${time.organization},${time.client},${time.project},${time.activity},${time.email},${
								time.date
						  },${hours.toFixed(2)}`
						: []
				)
			}, [])
			.join("\n")
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
