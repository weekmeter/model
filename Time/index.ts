import { isoly } from "isoly"
import { isly } from "isly"
import { Code } from "../Code"
import { Modified } from "../Modified"
import { Scope } from "../Scope"
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
	export type Scoped = Record<Code, Record<Code, Record<Code, Record<Code, Record<isoly.Date, Time>>>>>
	export namespace Scoped {
		export const type = isly.record<Scoped>(
			Code.type,
			isly.record(
				Code.type,
				isly.record(Code.type, isly.record(Code.type, isly.record(isly.fromIs("isoly.Date", isoly.Date.is), Time.type)))
			)
		)
		export const is = type.is
		export const flaw = type.flaw
	}
	export const is = type.is
	export const flaw = type.flaw
	export const key = Changeable.key
	export function scope(
		times: Time[]
	): Record<Code, Record<Code, Record<Code, Record<Code, Record<isoly.Date, Time>>>>> {
		return times.reduce(
			(result, time) =>
				Scope.insert(result, time, [time.organization, time.client, time.project, time.activity, time.date]),
			{}
		)
	}
	export function fromScope(times: ReturnType<typeof scope>): Time[] {
		return Scope.flat.constant<Time>(times, 5)
	}
	export function row(times: ReturnType<typeof scope> | Time[]): {
		organization: Code
		client: Code
		project: Code
		activity: Code
		times: Record<isoly.Date, Time>
	}[] {
		if (Array.isArray(times))
			times = scope(times)
		return Object.entries(times).flatMap(([organization, client]) =>
			Object.entries(client).flatMap(([client, project]) =>
				Object.entries(project).flatMap(([project, activity]) =>
					Object.entries(activity).flatMap(([activity, dates]) => ({
						organization,
						client,
						project,
						activity,
						times: dates,
					}))
				)
			)
		)
	}
}
