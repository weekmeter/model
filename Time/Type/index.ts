import { isly } from "isly"
import { Sick as TypeSick } from "./Sick"
import { Unpaid as TypeUnpaid } from "./Unpaid"
import { Vab as TypeVab } from "./Vab"
import { Vacation as TypeVacation } from "./Vacation"
import { Work as TypeWork } from "./Work"

export type Type = Type.Sick | Type.Unpaid | Type.Vab | Type.Vacation | Type.Work

export namespace Type {
	export type Sick = TypeSick
	export const Sick = TypeSick
	export type Unpaid = TypeUnpaid
	export const Unpaid = TypeUnpaid
	export type Vab = TypeVab
	export const Vab = TypeVab
	export type Vacation = TypeVacation
	export const Vacation = TypeVacation
	export type Work = TypeWork
	export const Work = TypeWork
	export const value = [Sick.value, Unpaid.value, Vab.value, Vacation.value, Work.value] as const
	export const type = isly.union<Type, Sick, Unpaid, Vab, Vacation, Work>(
		Sick.type,
		Unpaid.type,
		Vab.type,
		Vacation.type,
		Work.type
	)
	export const is = type.is
	export const flaw = type.flaw
}
