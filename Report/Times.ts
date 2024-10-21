import { isoly } from "isoly"
import { isly } from "isly"
import { Time } from "../Time"

export type Times<T extends Time> = { total: isoly.TimeSpan; times: T[] }

export namespace Times {
	export const type = Object.assign(createType(Time.type), { create: createType })
	function createType<T extends Time>(type: isly.Type<T>) {
		return isly.object<Times<T>>({
			total: isly.fromIs("isoly.TimeSpan", isoly.TimeSpan.is),
			times: isly.array(type),
		})
	}
}
