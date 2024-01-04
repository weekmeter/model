import { isly } from "isly"
import { Modified } from "../Modified"

export interface Base {
	modified: Modified
}
export namespace Base {
	export const type = isly.object<Base>({
		modified: Modified.type,
	})
	export const is = type.is
	export const flaw = type.flaw
}
