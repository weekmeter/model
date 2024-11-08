import { isly } from "isly"

export type Project = typeof Project.value
export namespace Project {
	export const value = "project" as const
	export const type = isly.string(value)
	export const is = type.is
	export const flaw = type.flaw
}
