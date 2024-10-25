import { isly } from "isly"
import { Time } from "../Time"
import { Activity as DayActivity } from "./Activity"
import { Project as DayProject } from "./Project"

export type Day = Partial<Record<Day.Activity, Time>> // "client/project/activity" | "vacation" | "unpaid" | "parental" | "sick"
export namespace Day {
	export import Project = DayProject
	export import Activity = DayActivity
	export const type = isly.record<Day>(DayActivity.type, Time.type.optional())
	export const is = type.is
	export const flaw = type.flaw
	export function set(day: Day | undefined, time: Time): Day {
		const key: keyof Day = time.type == "work" ? `${time.client}/${time.project}/${time.activity}` : time.type
		return { ...(day ?? {}), [key]: time }
	}
}
