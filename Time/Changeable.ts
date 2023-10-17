import { isoly } from "isoly"
import { Creatable } from "./Creatable"

export type Changeable = Creatable
export namespace Changeable {
	export const type = Creatable.type
	export const is = type.is
	export const flaw = type.flaw
}
