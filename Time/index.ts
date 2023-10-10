import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { Changeable as TimeChangeable } from "./Changeable"
import { Creatable as TimeCreatable } from "./Creatable"

export interface Time extends Time.Creatable {
	balance: isoly.TimeSpan
	locked?: true
	modified: { time: isoly.DateTime; by: userwidgets.Email }
}
export namespace Time {
	export type Creatable = TimeCreatable
	export const Creatable = TimeCreatable
	export type Changeable = TimeChangeable
	export const Changeable = TimeChangeable
}
