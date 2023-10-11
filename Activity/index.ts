import { isly } from "isly"
import { Modified } from "../Modified"
import { Creatable as ActivityCreatable } from "./Creatable"

export interface Activity extends Activity.Creatable {
	modified: Modified
}
export namespace Activity {
	export type Creatable = ActivityCreatable
	export const Creatable = ActivityCreatable
	export const type: isly.object.ExtendableType<Activity> = Creatable.type.extend<Activity>({
		modified: Modified.type,
	})
	export const is = type.is
	export const flaw = type.flaw
}
