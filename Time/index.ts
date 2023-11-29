import { isly } from "isly"
import { Changeable as TimeChangeable } from "./Changeable"
import { Sick as TimeSick } from "./Sick"
import { Unpaid as TimeUnpaid } from "./Unpaid"
import { Vab as TimeVab } from "./Vab"
import { Vacation as TimeVacation } from "./Vacation"
import { Work as TimeWork } from "./Work"

export type Time = Time.Sick | Time.Unpaid | Time.Vab | Time.Vacation | Time.Work
export namespace Time {
	export type Changeable = TimeChangeable
	export const Changeable = TimeChangeable
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
	export type Vab = TimeVab
	export const Vab = TimeVab
	export namespace Vab {
		export type Changeable = TimeVab.Changeable
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
	export const type = isly.union<Time, Sick, Unpaid, Vab, Vacation, Work>(
		Sick.type,
		Unpaid.type,
		Vab.type,
		Vacation.type,
		Work.type
	)
	export const is = type.is
	export const flaw = type.flaw
	export const scope = Changeable.scope
}
