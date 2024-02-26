import { isly } from "isly"
import { View as TypeView } from "./View"
import { Work as TypeWork } from "./Work"

export type Type = Type.Work | Type.View
export namespace Type {
	export type Work = TypeWork
	export const Work = TypeWork
	export type View = TypeView
	export const View = TypeView
	export const type = isly.union<Type, Type.Work, Type.View>(Work.type, View.type)
	export const is = type.is
	export const flaw = type.flaw
	export const values = [Work.value, View.value] as const
}
