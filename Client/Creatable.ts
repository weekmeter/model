import { isly } from "isly"

export interface Creatable {
	name: string
	code: string
}
export namespace Creatable {
	export const type = isly.object<Creatable>({ name: isly.string(), code: isly.string() })
	export const is = type.is
	export const flaw = type.flaw
}
