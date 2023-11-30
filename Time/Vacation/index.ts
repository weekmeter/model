import { isly } from "isly"
import { Base } from "../Base"
import { Changeable as VacationChangeable } from "./Changeable"

export type Vacation = Base & VacationChangeable
export namespace Vacation {
	export type Changeable = VacationChangeable
	export const Changeable = VacationChangeable
	export type Scoped = VacationChangeable.Scoped
	export const type = isly.intersection<Vacation, Base, Vacation.Changeable>(Base.type, VacationChangeable.type)
	export const is = type.is
	export const flaw = type.flaw
	export const key = Changeable.key
	export const scope = Changeable.scope
	export const row = Changeable.row
}
