import { isoly } from "isoly"
import { isly } from "isly"
import { Creatable as ActivityCreatable } from "./Creatable"

export interface Activity extends Activity.Creatable {
	modified: isoly.DateTime
	created: isoly.DateTime
}
export namespace Activity {
	export type Creatable = ActivityCreatable
	export const Creatable = ActivityCreatable
	export const type: isly.object.ExtendableType<Activity> = Creatable.type.extend<Activity>({
		modified: isly.fromIs<isoly.DateTime>("DateTime", isoly.DateTime.is),
		created: isly.fromIs<isoly.DateTime>("DateTime", isoly.DateTime.is),
	})
	export const is = type.is
	export const flaw = type.flaw
}
