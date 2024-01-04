import { Salary as CreatableSalary } from "./Salary"

export type Creatable = Creatable.Salary
export namespace Creatable {
	export type Salary = CreatableSalary
	export const Salary = CreatableSalary
	export const type = CreatableSalary.type
	export const is = type.is
	export const flaw = type.flaw
}
