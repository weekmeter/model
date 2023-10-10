import { isoly } from "isoly"
import { Creatable as ActivityCreatable } from "./Creatable"

export interface Activity extends Activity.Creatable {
	modified: isoly.DateTime
	created: isoly.DateTime
}
export namespace Activity {
	export type Creatable = ActivityCreatable
	export const Creatable = ActivityCreatable
}
