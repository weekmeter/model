import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Scope } from "../../Scope"
import { Changeable as ChangeableSick } from "../Sick/Changeable"
import { Type } from "../Type"
import { Changeable as ChangeableUnpaid } from "../Unpaid/Changeable"
import { Changeable as ChangeableVab } from "../Vab/Changeable"
import { Changeable as ChangeableVacation } from "../Vacation/Changeable"
import { Changeable as ChangeableWork } from "../Work/Changeable"
import { Base as ChangeableBase } from "./Base"

type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never

export type Changeable = Changeable.Sick | Changeable.Unpaid | Changeable.Vab | Changeable.Vacation | Changeable.Work
export namespace Changeable {
	export type Base = ChangeableBase
	export const Base = ChangeableBase
	export type Sick = ChangeableSick
	export const Sick = ChangeableSick
	export type Unpaid = ChangeableUnpaid
	export const Unpaid = ChangeableUnpaid
	export type Vab = ChangeableVab
	export const Vab = ChangeableVab
	export type Vacation = ChangeableVacation
	export const Vacation = ChangeableVacation
	export type Work = ChangeableWork
	export const Work = ChangeableWork
	export type Scoped = Record<
		userwidgets.Organization.Identifier,
		{ [type in Type]?: ReturnType<typeof map.scope[type]> }
	>
	export type Row = { [type in Type]?: ReturnType<typeof map.row[type]> }
	export const type = isly.union<Changeable, Sick, Unpaid, Vab, Vacation, Work>(
		Sick.type,
		Unpaid.type,
		Vab.type,
		Vacation.type,
		Work.type
	)
	export const is = type.is
	export const flaw = type.flaw
	export function scope(times: Changeable[]): Scoped {
		const result = times.reduce<Scoped>(
			(result, time) =>
				Scope.insert<Scoped>(
					result,
					map.scope[time.type]((result[time.organization]?.[time.type] ?? {}) as any, time as any),
					[time.organization, time.email, time.type]
				),
			{}
		)
		return result
	}
	export function row(times: Scoped | Changeable[]): Record<isoly.Date, Changeable>[] {
		const scoped = !Array.isArray(times) ? times : scope(times)
		return Object.entries(scoped).flatMap(([, scoped]) =>
			Object.entries(scoped).flatMap(([, scoped]) =>
				Object.entries(scoped).flatMap<Record<isoly.Date, Changeable>>(([type, scoped]) =>
					(map.row[type as Type] as (scoped: any) => ReturnType<typeof map.row[Type]>)(scoped)
				)
			)
		)
	}
	export function fromScope(scoped: Scoped): Changeable[] {
		return Object.entries(scoped).reduce<Changeable[]>((result, [organization, scoped]) => {
			return result.concat(
				Object.entries(scoped).reduce<Changeable[]>(
					(result, [type, scoped]) =>
						result.concat(
							(map.fromScope[type as Type] as (scoped: any) => ReturnType<typeof map.fromScope[Type]>)(scoped)
						),
					result
				)
			)
		}, [])
	}
	const map = {
		scope: {
			sick: Sick.scope,
			unpaid: Unpaid.scope,
			vab: Vab.scope,
			vacation: Vacation.scope,
			work: Work.scope,
		},
		fromScope: {
			sick: Sick.fromScope,
			unpaid: Unpaid.fromScope,
			vab: Vab.fromScope,
			vacation: Vacation.fromScope,
			work: Work.fromScope,
		},
		row: {
			sick: Sick.row,
			unpaid: Unpaid.row,
			vab: Vab.row,
			vacation: Vacation.row,
			work: Work.row,
		},
	}
	export function key(
		time: Partial<DistributiveOmit<Changeable, "value">>,
		options?: Parameters<typeof Base.key>[1]
	): string {
		return time.type == "sick"
			? Sick.key(time, options)
			: time.type == "unpaid"
			? Unpaid.key(time, options)
			: time.type == "vab"
			? Vab.key(time, options)
			: time.type == "vacation"
			? Vacation.key(time, options)
			: time.type == "work"
			? Work.key(time, options)
			: Base.key(time, options)
	}
}
