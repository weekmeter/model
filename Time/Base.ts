import { isoly } from "isoly"
import { isly } from "isly"
import { Modified } from "../Modified"
import { Base as BaseChangeable } from "./Changeable/Base"

/**
 * expected = expected work time when salary was locked
 */
export interface Base extends Base.Changeable {
	locked?: { expected?: isoly.TimeSpan; invoice?: true }
	modified: Modified
}
export namespace Base {
	export type Changeable = BaseChangeable
	export const Changeable = BaseChangeable
	export const type = Changeable.type.extend<Base>({
		locked: isly
			.object<Exclude<Base["locked"], undefined>>({
				expected: isly.fromIs<isoly.TimeSpan>("isoly.TimeSpan", isoly.TimeSpan.is).optional(),
				invoice: isly.boolean(true).optional(),
			})
			.optional(),
		modified: Modified.type,
	})
	export const is = type.is
	export const flaw = type.flaw
}
