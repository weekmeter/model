import { isly } from "isly"
import { Changeable as ChangeableParental } from "../Parental/Changeable"
import { Changeable as ChangeableSick } from "../Sick/Changeable"
import { Changeable as ChangeableUnpaid } from "../Unpaid/Changeable"
import { Changeable as ChangeableVacation } from "../Vacation/Changeable"
import { Changeable as ChangeableWork } from "../Work/Changeable"
import { Base as ChangeableBase } from "./Base"

type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never

export type Changeable =
	| Changeable.Sick
	| Changeable.Unpaid
	| Changeable.Parental
	| Changeable.Vacation
	| Changeable.Work
export namespace Changeable {
	export type Base = ChangeableBase
	export const Base = ChangeableBase
	export type Sick = ChangeableSick
	export const Sick = ChangeableSick
	export type Unpaid = ChangeableUnpaid
	export const Unpaid = ChangeableUnpaid
	export type Parental = ChangeableParental
	export const Parental = ChangeableParental
	export type Vacation = ChangeableVacation
	export const Vacation = ChangeableVacation
	export type Work = ChangeableWork
	export const Work = ChangeableWork
	export const type = isly.union<Changeable, Sick, Unpaid, Parental, Vacation, Work>(
		Sick.type,
		Unpaid.type,
		Parental.type,
		Vacation.type,
		Work.type
	)
	export const is = type.is
	export const flaw = type.flaw
	export function key(
		time: Partial<DistributiveOmit<Changeable, "value">>,
		options?: Parameters<typeof Base.key>[1]
	): string {
		return time.type == "sick"
			? Sick.key(time, options)
			: time.type == "unpaid"
			? Unpaid.key(time, options)
			: time.type == "parental"
			? Parental.key(time, options)
			: time.type == "vacation"
			? Vacation.key(time, options)
			: time.type == "work"
			? Work.key(time, options)
			: Base.key(time, options)
	}
}
