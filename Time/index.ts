import { isoly } from "isoly"
import { isly } from "isly"
import { Code } from "../Code"
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
		return Object.values(times).reduce(
			(result: Time[], client) =>
				result.concat(
					Object.values(client).reduce(
						(result: Time[], project) =>
							result.concat(
								Object.values(project).reduce(
									(result: Time[], activity) =>
										result.concat(
											Object.values(activity).reduce(
												(result: Time[], date) =>
													result.concat(Object.values(date).reduce((result: Time[], time) => result.concat(time), [])),
												[]
											)
										),
									[]
								)
							),
						[]
					)
				),
			[]
		)
	}
	export function makeRow(times: ReturnType<typeof scope> | Time[]): {
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
type Scope<T> = { [scope: string]: T | Scope<T> }
namespace Scope {
	export function insert<T>(target: Scope<T>, value: T, path: string[]): Scope<T> {
		let result: Scope<T>
		const segment = path[0]
		if (path.length == 1)
			result = Object.assign(target, { [segment]: value })
		else {
			result = target
			if (path.length >= 2)
				insert(target[segment] ?? Object.assign(target, { [segment]: {} })[segment], value, path.slice(1))
		}
		return result
	}
}
