import { isly } from "isly"
import { Code } from "../Code"
import { Modified } from "../Modified"
import { Nest } from "../Nest"
import { Creatable as ActivityCreatable } from "./Creatable"

export interface Activity extends Activity.Creatable {
	modified: Modified
}
export namespace Activity {
	export type Creatable = ActivityCreatable
	export const Creatable = ActivityCreatable
	export const type = Creatable.type.extend<Activity>({
		modified: Modified.type,
	})
	export type Scoped = Record<Code, Record<Code, Record<Code, Record<Code, Activity>>>>
	export namespace Scoped {
		export const type = isly.record<Scoped>(
			Code.type,
			isly.record(Code.type, isly.record(Code.type, isly.record(Code.type, Activity.type)))
		)
		export const is = type.is
		export const flaw = type.flaw
	}
	export const is = type.is
	export const flaw = type.flaw
	export const key = Creatable.key
	export function scope(activities: Activity[]): Record<Code, Record<Code, Record<Code, Record<Code, Activity>>>> {
		return activities.reduce(
			(result, activity) =>
				Nest.insert(result, activity, [activity.organization, activity.client, activity.project, activity.code]),
			{}
		)
	}
	export function fromScope(activities: ReturnType<typeof scope>): Activity[] {
		return Nest.flat.constant<Activity>(activities, 4)
	}
}
