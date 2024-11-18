import { Modified } from "../../Modified"
import { Base as BaseChangeable } from "../Changeable/Base"
import { Locked as BaseLocked } from "./Locked"

export interface Base extends Base.Changeable {
	locked?: Base.Locked
	modified: Modified
}
export namespace Base {
	export import Changeable = BaseChangeable
	export import Locked = BaseLocked
	export const type = Changeable.type.extend<Base>({
		locked: Locked.type.optional(),
		modified: Modified.type,
	})
	export const is = type.is
	export const flaw = type.flaw
}
