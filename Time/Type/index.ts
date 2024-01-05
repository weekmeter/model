import { isly } from "isly"
import { Parental as TypeParental } from "./Parental"
import { Sick as TypeSick } from "./Sick"
import { Unpaid as TypeUnpaid } from "./Unpaid"
import { Vacation as TypeVacation } from "./Vacation"
import { Work as TypeWork } from "./Work"

export type Type = Type.Sick | Type.Unpaid | Type.Parental | Type.Vacation | Type.Work

export namespace Type {
	export type Sick = TypeSick
	export const Sick = TypeSick
	export type Unpaid = TypeUnpaid
	export const Unpaid = TypeUnpaid
	export type Parental = TypeParental
	export const Parental = TypeParental
	export type Vacation = TypeVacation
	export const Vacation = TypeVacation
	export type Work = TypeWork
	export const Work = TypeWork
	export const value = [Sick.value, Unpaid.value, Parental.value, Vacation.value, Work.value] as const
	export const type = isly.union<Type, Sick, Unpaid, Parental, Vacation, Work>(
		Sick.type,
		Unpaid.type,
		Parental.type,
		Vacation.type,
		Work.type
	)
	export const is = type.is
	export const flaw = type.flaw
}
