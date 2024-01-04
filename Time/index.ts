import { isly } from "isly"
import { Base as TimeBase } from "./Base"
import { Changeable as TimeChangeable } from "./Changeable"
import { Sick as TimeSick } from "./Sick"
import { Type as TimeType } from "./Type"
import { Unpaid as TimeUnpaid } from "./Unpaid"
import { Vab as TimeVab } from "./Vab"
import { Vacation as TimeVacation } from "./Vacation"
import { Work as TimeWork } from "./Work"

export type Time = Time.Sick | Time.Unpaid | Time.Vab | Time.Vacation | Time.Work
export namespace Time {
	export type Base = TimeBase
	export const Base = TimeBase
	export type Type = TimeType
	export const Type = TimeType
	export namespace Type {
		export type Sick = TimeType.Sick
		export type Unpaid = TimeType.Unpaid
		export type Vab = TimeType.Vab
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
	export const key = Changeable.key
	export function group(times: Time[]): { [type in Type]: (Time & { type: type })[] } {
		return {
			[Type.Sick.value]: times.filter(Sick.is),
			[Type.Unpaid.value]: times.filter(Unpaid.is),
			[Type.Vab.value]: times.filter(Vab.is),
			[Type.Vacation.value]: times.filter(Vacation.is),
			[Type.Work.value]: times.filter(Work.is),
		}
	}
}
