import { isly } from "isly"
import { Base as TimeBase } from "./Base"
import { Changeable as TimeChangeable } from "./Changeable"
import { Parental as TimeParental } from "./Parental"
import { Rule as TimeRule } from "./Rule"
import { Rules as TimeRules } from "./Rules"
import { Sick as TimeSick } from "./Sick"
import { Type as TimeType } from "./Type"
import { Unpaid as TimeUnpaid } from "./Unpaid"
import { Vacation as TimeVacation } from "./Vacation"
import { Work as TimeWork } from "./Work"

export type Time = Time.Sick | Time.Unpaid | Time.Parental | Time.Vacation | Time.Work
export namespace Time {
	export import Base = TimeBase
	export import Changeable = TimeChangeable
	export import Parental = TimeParental
	export import Rule = TimeRule
	export import Rules = TimeRules
	export import Sick = TimeSick
	export import Type = TimeType
	export import Unpaid = TimeUnpaid
	export import Vacation = TimeVacation
	export import Work = TimeWork

	export const type = isly.union<Time, Sick, Unpaid, Parental, Vacation, Work>(
		Sick.type,
		Unpaid.type,
		Parental.type,
		Vacation.type,
		Work.type
	)
	export const is = type.is
	export const flaw = type.flaw
	export const key = Changeable.key
}
