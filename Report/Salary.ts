import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Code } from "../Code"
import { Time } from "../Time"
import { Base } from "./Base"
import { Salary as SalaryCreatable } from "./Creatable/Salary"
import { Type } from "./Type"

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
	dates: isoly.DateRange
	balance: isoly.TimeSpan
	work: { total: isoly.TimeSpan; clients: Record<Code, Times<Time.Work>> }
} & Base &
	Omit<Salary.Creatable, "date">
export namespace Salary {
	export type Creatable = SalaryCreatable
	export const Creatable = SalaryCreatable
	export const type = Base.type.extend<Salary>({
		type: Type.Salary.type,
		email: userwidgets.Email.type,
		dates: isly.fromIs("isoly.DateRange", isoly.DateRange.is),
		adjustment: isly.fromIs("isoly.TimeSpan", isoly.TimeSpan.is).optional(),
		total: isly.fromIs("isoly.TimeSpan", isoly.TimeSpan.is),
		balance: isly.fromIs("isoly.TimeSpan", isoly.TimeSpan.is),
		sick: Times.type.create(Time.Sick.type),
		unpaid: Times.type.create(Time.Unpaid.type),
		vab: Times.type.create(Time.Vab.type),
		vacation: Times.type.create(Time.Vacation.type),
		work: isly.object({
			total: isly.fromIs("isoly.TimeSpan", isoly.TimeSpan.is),
			clients: isly.record<Code, Times<Time.Work>>(Code.type, Times.type.create(Time.Work.type)),
		}),
	})
	export const is = type.is
	export const flaw = type.flaw
	export function generate(times: Time[]): Pick<Salary, Time.Type | "total"> {
		return {
			total: isoly.TimeSpan.add(...times.map(time => time.value)),
			[Time.Type.Sick.value]: ((times: Time.Sick[]) => ({
				total: isoly.TimeSpan.add(...times.map(time => time.value)),
				times: times,
			}))(times.filter(Time.Sick.is)),
			[Time.Type.Unpaid.value]: ((times: Time.Unpaid[]) => ({
				total: isoly.TimeSpan.add(...times.map(time => time.value)),
				times: times,
			}))(times.filter(Time.Unpaid.is)),
			[Time.Type.Vab.value]: ((times: Time.Vab[]) => ({
				total: isoly.TimeSpan.add(...times.map(time => time.value)),
				times: times,
			}))(times.filter(Time.Vab.is)),
			[Time.Type.Vacation.value]: ((times: Time.Vacation[]) => ({
				total: isoly.TimeSpan.add(...times.map(time => time.value)),
				times: times,
			}))(times.filter(Time.Vacation.is)),
			[Time.Type.Work.value]: ((times: Time.Work[]) => ({
				total: isoly.TimeSpan.add(...times.map(time => time.value)),
				clients: times.reduce<ReturnType<typeof generate>["work"]["clients"]>(
					(result, time) =>
						Object.assign(result, {
							[time.client]: {
								total: isoly.TimeSpan.add(result[time.client]?.total ?? {}, time.value),
								times: [...(result[time.client]?.times ?? []), time],
							},
						}),
					{}
				),
			}))(times.filter(Time.Work.is)),
		}
	}
}