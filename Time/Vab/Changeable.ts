import { Base } from "../Changeable/Base"
import { Type } from "../Type"

export interface Changeable extends Base {
	type: Type.Vab
}
export namespace Changeable {
	export type Scoped = Base.Scoped<Changeable>
	export const type = Base.type.extend<Changeable>({
		type: Type.Vab.type,
	})
	export const is = type.is
	export const flaw = type.flaw
	export function key(time: Omit<Changeable, "value">): string {
		return Base.key(time)
	}
	export const scope = Base.scope
}
