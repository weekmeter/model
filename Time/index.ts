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
	export type Rule = TimeRule
	export const Rule = TimeRule
	export namespace Rule {
		export type Base = TimeRule.Base
	}
	export type Rules = TimeRules
	export const Rules = TimeRules
	export namespace Rules {
		export type Changeable = TimeRules.Changeable
		export type Group = TimeRules.Group
		export namespace Group {
			export type Changeable = TimeRules.Group.Changeable
		}
	}
	export type Base = TimeBase
	export const Base = TimeBase
	export type Type = TimeType
	export const Type = TimeType
	export namespace Type {
		export type Sick = TimeType.Sick
		export type Unpaid = TimeType.Unpaid
		export type Parental = TimeType.Parental
		export type Vacation = TimeType.Vacation
		export type Work = TimeType.Work
	}
	export type Changeable = TimeChangeable
	export const Changeable = TimeChangeable
	export namespace Changeable {
		export type Base = TimeChangeable.Base
	}
	export type Sick = TimeSick
	export const Sick = TimeSick
	export namespace Sick {
		export type Changeable = TimeSick.Changeable
	}
	export type Unpaid = TimeUnpaid
	export const Unpaid = TimeUnpaid
	export namespace Unpaid {
		export type Changeable = TimeUnpaid.Changeable
	}
	export type Parental = TimeParental
	export const Parental = TimeParental
	export namespace Parental {
		export type Changeable = TimeParental.Changeable
	}
	export type Vacation = TimeVacation
	export const Vacation = TimeVacation
	export namespace Vacation {
		export type Changeable = TimeVacation.Changeable
	}
	export type Work = TimeWork
	export const Work = TimeWork
	export namespace Work {
		export type Changeable = TimeWork.Changeable
	}
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
