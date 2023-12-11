import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Scope } from "../../Scope"
import { Type } from "../Type"

export interface Base {
	type: Type
	organization: userwidgets.Organization.Identifier
	email: userwidgets.Email
	date: isoly.Date
	value: isoly.TimeSpan
}
export namespace Base {
	export type Scoped<T extends Base> = Record<isoly.Date, T>
	export type Row<T extends Base> = Record<isoly.Date, T>
	export const type = isly.object<Base>({
		type: Type.type,
		organization: userwidgets.Organization.Identifier.type,
		email: userwidgets.Email.type,
		date: isly.fromIs<isoly.Date>("isoly.Date", isoly.Date.is),
		value: isly.fromIs<isoly.TimeSpan>("isoly.TimeSpan", isoly.TimeSpan.is),
	})
	export const is = type.is
	export const flaw = type.flaw
	export function key(time: Partial<Omit<Base, "value">>, options?: { date?: boolean }): string {
		return [time.type, time.organization, time.email, ...(options?.date != false ? [time.date] : [])]
			.filter(Boolean)
			.join("|")
	}
	export function scope<T extends Base>(target: Scoped<T>, time: T): Scoped<T> {
		// this might be wrong. use Scope.insert?
		return Object.assign(target, { [time.date]: time })
	}
	export function fromScope<T extends Base>(scoped: Scoped<T>): T[] {
		return Scope.flat.constant<T>(scoped, 1)
	}
	export function row<T extends Base>(times: Scoped<T>): Record<isoly.Date, T>[] {
		return [times]
	}
}
