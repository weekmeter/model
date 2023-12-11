import { isly } from "isly"
import { Base } from "../Base"
import { Changeable as VabChangeable } from "./Changeable"

export type Vab = Base & VabChangeable
export namespace Vab {
	export type Changeable = VabChangeable
	export const Changeable = VabChangeable
	export type Scoped = VabChangeable.Scoped
	export const type = isly.intersection<Vab, Base, Vab.Changeable>(Base.type, VabChangeable.type)
	export const is = type.is
	export const flaw = type.flaw
	export const key = Changeable.key
	export const scope = Changeable.scope
	export const fromScope = Changeable.fromScope
	export const row = Changeable.row
}
