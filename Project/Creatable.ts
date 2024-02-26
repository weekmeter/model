import { isly } from "isly"
import { Changeable } from "./Changeable"

export interface Creatable extends Changeable {
	name: string
}
export namespace Creatable {
	export const type = Changeable.type.extend<Creatable>({
		name: isly.string(),
	})
	export const is = type.is
	export const flaw = type.flaw
	export const key = Changeable.key
}
