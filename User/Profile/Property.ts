import { isly } from "isly"

export interface Property {
	name: string
	value: string
}

export namespace Property {
	const pattern = /^[^.\s*!]+$/
	export const type = isly.object<Property>({ name: isly.string(pattern), value: isly.string(pattern) })
	export const is = type.is
	export const flaw = type.flaw
}
