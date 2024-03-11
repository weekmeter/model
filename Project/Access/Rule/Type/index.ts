import { isly } from "isly"
import { Admin as TypeAdmin } from "./Admin"
import { View as TypeView } from "./View"
import { Work as TypeWork } from "./Work"

export type Type = Type.Work | Type.View | Type.Admin
export namespace Type {
	export type Work = TypeWork
	export const Work = TypeWork
	export type View = TypeView
	export const View = TypeView
	export type Admin = TypeAdmin
	export const Admin = TypeAdmin
	export const type = isly.union<Type, Type.Work, Type.View, Type.Admin>(Work.type, View.type, Admin.type)
	export const is = type.is
	export const flaw = type.flaw
	export const values = [Work.value, View.value, Admin.value] as const
}
