// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isly } from "isly"
import { Base } from "../Changeable/Base"
import { Type } from "../Type"

export interface Changeable extends Base {
	type: Type.Sick
}
export namespace Changeable {
	export type Scoped = Base.Scoped<Changeable>
	export const type = Base.type.extend<Changeable>({
		type: Type.Sick.type,
	})
	export const is = type.is
	export const flaw = type.flaw
	export function key(time: Omit<Changeable, "value">): string {
		return Base.key(time)
	}
	export const scope = Base.scope
}
