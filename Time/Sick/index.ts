import { isly } from "isly"
import { Base } from "../Base"
import { Changeable as SickChangeable } from "./Changeable"

export type Sick = Base & SickChangeable
export namespace Sick {
	export type Changeable = SickChangeable
	export const Changeable = SickChangeable
	export type Scoped = SickChangeable.Scoped
	export const type = isly.intersection<Sick, Base, Sick.Changeable>(Base.type, SickChangeable.type)
	export const is = type.is
	export const flaw = type.flaw
	export const key = Changeable.key
	export const scope = Changeable.scope
	export const row = Changeable.row
}
