import { isly } from "isly"

export type Admin = typeof Admin.value
export namespace Admin {
	export const value = "admin" as const
	export const type = isly.string<Admin>(value)
	export const is = type.is
	export const flaw = type.flaw
}
