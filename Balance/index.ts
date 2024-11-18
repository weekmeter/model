import { isoly } from "isoly"
import { isly } from "isly"
import { Day } from "../Day"

export interface Balance {
	value: isoly.TimeSpan
	lock?: {
		salary?: isoly.Date
		projects?: Partial<Record<Day.Project.Work, isoly.Date>>
	}
}
export namespace Balance {
	export const type = isly.object<Balance>({
		value: isly.fromIs<isoly.TimeSpan>("isoly.TimeSpan", isoly.TimeSpan.is),
		lock: isly.object<Required<Balance>["lock"]>({
			salary: isly.fromIs<isoly.Date>("isoly.Date", isoly.Date.is).optional(),
			projects: isly
				.record<Required<Required<Balance>["lock"]>["projects"]>(
					Day.Project.Work.type,
					isly.fromIs<isoly.Date>("isoly.Date", isoly.Date.is).optional()
				)
				.optional(),
		}),
	})
	export const is = type.is
	export const flaw = type.flaw
}
