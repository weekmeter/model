import { isoly } from "isoly"
import { isly } from "isly"
import { Day } from "../Day"

export interface Balance {
	value: isoly.TimeSpan
	// deprecated property for backwards compatibility with the old old app
	lock?: isoly.Date
	locks?: {
		salary?: isoly.Date
		projects?: Partial<Record<Day.Project.Work, isoly.Date>>
	}
}
export namespace Balance {
	const date = isly.fromIs<isoly.Date>("isoly.Date", isoly.Date.is)
	export const type = isly.object<Balance>({
		value: isly.fromIs<isoly.TimeSpan>("isoly.TimeSpan", isoly.TimeSpan.is),
		lock: date.optional(),
		locks: isly
			.object<Required<Balance>["locks"]>({
				salary: date.optional(),
				projects: isly
					.record<Required<Required<Balance>["locks"]>["projects"]>(Day.Project.Work.type, date.optional())
					.optional(),
			})
			.optional(),
	})
	export const is = type.is
	export const flaw = type.flaw
}
