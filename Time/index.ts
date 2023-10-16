import { isly } from "isly"
import { Modified } from "../Modified"
import { Changeable as TimeChangeable } from "./Changeable"
import { Creatable as TimeCreatable } from "./Creatable"

export interface Time extends Time.Creatable {
	locked?: true
	modified: Modified
}
export namespace Time {
	export type Creatable = TimeCreatable
	export const Creatable = TimeCreatable
	export type Changeable = TimeChangeable
	export const Changeable = TimeChangeable
	export const type: isly.object.ExtendableType<Time> = Creatable.type.extend<Time>({
		locked: isly.boolean(true).optional(),
		modified: Modified.type,
	})

	export const is = type.is
	export const flaw = type.flaw
}
