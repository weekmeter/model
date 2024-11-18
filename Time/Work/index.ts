import { isly } from "isly"
import { Base } from "../Base"
import { Changeable as WorkChangeable } from "./Changeable"
import { Locked as WorkLocked } from "./Locked"

export type Work = Base & Work.Changeable & { locked?: Work.Locked }
export namespace Work {
	export import Changeable = WorkChangeable
	export import Locked = WorkLocked
	export const type = isly.intersection<Work, Base, Changeable, { locked?: Locked }>(
		Base.type,
		Changeable.type,
		isly.object({ locked: Locked.type.optional() })
	)
	export const is = type.is
	export const flaw = type.flaw
	export const key = Changeable.key
}
