// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isly } from "isly"
import { Salary as TypeSalary } from "./Salary"

export type Type = Type.Salary
export namespace Type {
	export type Salary = TypeSalary
	export const Salary = TypeSalary
	export const type = Salary.type
	export const is = type.is
	export const flaw = type.flaw
}
