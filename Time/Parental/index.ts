import { isly } from "isly"
import { Base } from "../Base"
import { Changeable as VabChangeable } from "./Changeable"

export type Parental = Base & VabChangeable
export namespace Parental {
	export type Changeable = VabChangeable
	export const Changeable = VabChangeable
	export const type = isly.intersection<Parental, Base, Parental.Changeable>(Base.type, VabChangeable.type)
	export const is = type.is
	export const flaw = type.flaw
	export const key = Changeable.key
}
