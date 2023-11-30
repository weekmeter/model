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
import { Base } from "./Base"

export type Changeable = Changeable.Sick | Changeable.Unpaid | Changeable.Vab | Changeable.Vacation | Changeable.Work
export namespace Changeable {
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
	export type Scoped = { [type in Type]?: ReturnType<typeof map.scope[type]> }
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
	export const key = Base.key
	export function scope(
		times: Changeable[],
		organization: userwidgets.Organization.Identifier,
		email: userwidgets.Email
	): Scoped {
		const result = times
			.filter(time => time.email == email && time.organization == organization)
			.reduce<Scoped>((result, time) => {
				return Scope.insert<Scoped>(result, map.scope[time.type]((result[time.type] ?? {}) as any, time as any), [
					time.type,
				])
			}, {})
		return result
	}
	export function row(times: Scoped): Record<isoly.Date, Changeable>[]
	export function row(
		times: Changeable[],
		organization: userwidgets.Organization.Identifier,
		email: userwidgets.Email
	): Record<isoly.Date, Changeable>[]
	export function row(
		times: Scoped | Changeable[],
		organization?: userwidgets.Organization.Identifier,
		email?: userwidgets.Email
	): Record<isoly.Date, Changeable>[] {
		const scoped = !Array.isArray(times) ? times : !organization || !email ? {} : scope(times, organization, email)
		return Object.entries(scoped).flatMap<Record<isoly.Date, Changeable>>(([type, scoped]) => {
			return (map.row[type as Type] as (scoped: any) => ReturnType<typeof map.row[Type]>)(scoped)
		})
	}
	const map = {
		scope: {
			sick: Sick.scope,
			unpaid: Unpaid.scope,
			vab: Vab.scope,
			vacation: Vacation.scope,
			work: Work.scope,
		},
		row: {
			sick: Sick.row,
			unpaid: Unpaid.row,
			vab: Vab.row,
			vacation: Vacation.row,
			work: Work.row,
		},
	}
}
