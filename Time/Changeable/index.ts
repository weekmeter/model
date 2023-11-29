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
	export function scope<T extends Changeable>(
		times: T[],
		organization: userwidgets.Organization.Identifier,
		email: userwidgets.Email
	) {
		const result = times
			.filter(time => time.email == email && time.organization == organization)
			.reduce<{ [type in Type]?: ReturnType<typeof map[type]> }>((result, time) => {
				return Scope.insert<typeof result>(result, map[time.type]((result[time.type] ?? {}) as any, time as any), [
					time.type,
				])
			}, {})
		return result
	}
	const map = {
		sick: Base.scope,
		unpaid: Base.scope,
		vab: Base.scope,
		vacation: Base.scope,
		work: Work.scope,
	} as const
}
