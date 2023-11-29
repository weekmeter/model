import { isly } from "isly"
import { Base } from "../Base"
import { Changeable as UnpaidChangeable } from "./Changeable"

export type Unpaid = Base & UnpaidChangeable
export namespace Unpaid {
	export type Changeable = UnpaidChangeable
	export const Changeable = UnpaidChangeable
	export type Scoped = UnpaidChangeable.Scoped
	export const type = isly.intersection<Unpaid, Base, Unpaid.Changeable>(Base.type, UnpaidChangeable.type)
	export const is = type.is
	export const flaw = type.flaw
	export const key = Changeable.key
	export const scope = Changeable.scope
}
