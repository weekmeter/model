import { isly } from "isly"

export interface Creatable {
	name: string
	code: string
}
export namespace Creatable {
	export const type = isly.object()
}
