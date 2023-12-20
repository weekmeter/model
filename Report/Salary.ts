import { isoly } from "isoly"
import { isly } from "isly"
import { Code } from "../Code"
import { Time } from "../Time"

type Times<T extends Time> = { total: isoly.TimeSpan; times: T[] }
namespace Times {
	export const type = Object.assign(createType(Time.type), { create: createType })
	function createType<T extends Time>(type: isly.Type<T>) {
		return isly.object<Times<T>>({
			total: isly.fromIs("isoly.TimeSpan", isoly.TimeSpan.is),
			times: isly.array(type),
		})
	}
}

export type Salary = { [type in Exclude<Time.Type, "work">]: Times<Time & { type: type }> } & {
	total: isoly.TimeSpan
	work: { total: isoly.TimeSpan; clients: Record<Code, Times<Time.Work>> }
}
export namespace Salary {
	export const type = isly.object<Salary>({
		total: isly.fromIs("isoly.TimeSpan", isoly.TimeSpan.is),
		sick: Times.type.create(Time.Sick.type),
		unpaid: Times.type.create(Time.Unpaid.type),
		vab: Times.type.create(Time.Vab.type),
		vacation: Times.type.create(Time.Vacation.type),
		work: isly.object({
			total: isly.fromIs("isoy.TimeSpan", isoly.TimeSpan.is),
			clients: isly.record<Code, Times<Time.Work>>(Code.type, Times.type.create(Time.Work.type)),
		}),
	})
}
