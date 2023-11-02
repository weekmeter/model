export type Scope<T> = { [scope: string]: T | Scope<T> }
export namespace Scope {
	export function insert<T>(target: Scope<T>, value: T, path: string[]): Scope<T> {
		let result: Scope<T>
		const segment = path[0]
		if (path.length == 1)
			result = Object.assign(target, { [segment]: value })
		else {
			result = target
			if (path.length >= 2)
				insert(target[segment] ?? Object.assign(target, { [segment]: {} })[segment], value, path.slice(1))
		}
		return result
	}
	export const flat = Object.assign(flatFind, { constant: flatConstant })
	export function flatFind<T>(target: Scope<T>, is: (value: unknown) => value is T): T[] {
		return Object.values(target).reduce(
			(result: T[], scope) => (
				is(scope) ? result.push(scope) : flatFind(scope, is).forEach(value => result.push(value)), result
			),
			[]
		)
	}
	export function flatConstant<T>(target: Scope<T>, levels: number): T[] {
		levels--
		return Object.values(target).reduce(
			(result: T[], scope) => (
				levels <= 0
					? result.push(scope as T)
					: flat.constant(scope as Scope<T>, levels).forEach(value => result.push(value)),
				result
			),
			[]
		)
	}
}
