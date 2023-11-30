import { isoly } from "isoly"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isly } from "isly"
import { Base } from "../Changeable/Base"
import { Type } from "../Type"

export interface Changeable extends Base {
	type: Type.Unpaid
}
export namespace Changeable {
	export type Scoped<T extends Changeable = Changeable> = Base.Scoped<T>
	export const type = Base.type.extend<Changeable>({
		type: Type.Unpaid.type,
	})
	export const is = type.is
	export const flaw = type.flaw
	export function key(time: Omit<Changeable, "value">): string {
		return Base.key(time)
	}
	export const scope = Base.scope
	export function row<T extends Changeable>(times: Scoped<T>): Record<isoly.Date, T>[] {
		return [times]
	}
}
