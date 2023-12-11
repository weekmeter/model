// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isly } from "isly"
import { Base } from "../Changeable/Base"
import { Type } from "../Type"

export interface Changeable extends Base {
	type: Type.Vab
}
export namespace Changeable {
	export const type = Base.type.extend<Changeable>({
		type: Type.Vab.type,
	})
	export const is = type.is
	export const flaw = type.flaw
	export function key(time: Partial<Omit<Changeable, "value">>, options?: Parameters<typeof Base.key>[1]): string {
		return Base.key(time, options)
	}
}
