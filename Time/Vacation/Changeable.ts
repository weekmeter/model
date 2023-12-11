import { isoly } from "isoly"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isly } from "isly"
import { Base } from "../Changeable/Base"
import { Type } from "../Type"

export interface Changeable extends Base {
	type: Type.Vacation
}
export namespace Changeable {
	export type Scoped<T extends Changeable = Changeable> = Base.Scoped<T>
	export const type = Base.type.extend<Changeable>({
		type: Type.Vacation.type,
	})
	export const is = type.is
	export const flaw = type.flaw
	export function key(time: Partial<Omit<Changeable, "value">>, options?: Parameters<typeof Base.key>[1]): string {
		return Base.key(time, options)
	}
	export const scope = Base.scope
	export function fromScope(scoped: Scoped): Changeable[] {
		return Base.fromScope<Changeable>(scoped)
	}
	export function row<T extends Changeable>(times: Scoped<T>): Record<isoly.Date, T>[] {
		return [times]
	}
}
