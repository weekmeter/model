import { isly } from "isly"

export interface Property {
	name: string
	value: string
}

export namespace Property {
	export const type = isly.object<Property>({ name: isly.string(/^.+$/), value: isly.string(/^.+$/) })
	export const is = type.is
	export const flaw = type.flaw
}
