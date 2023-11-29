import { isly } from "isly"
import { Base } from "../Base"
import { Changeable as WorkChangeable } from "./Changeable"

export type Work = Base & Work.Changeable
export namespace Work {
	export type Changeable = WorkChangeable
	export const Changeable = WorkChangeable
	export type Scoped = WorkChangeable.Scoped
	export const type = isly.intersection<Work, Base, Work.Changeable>(Base.type, Work.Changeable.type)
	export const is = type.is
	export const flaw = type.flaw
	export const key = Changeable.key
	export const scope = Changeable.scope
}
