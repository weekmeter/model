export type Nest<T> = { [scope: string]: T | Nest<T> }
export namespace Nest {
	export function insert<T>(target: Nest<T>, value: T, path: string[]): Nest<T> {
		let result: Nest<T>
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
	export function flatFind<T>(target: Nest<T>, is: (value: unknown) => value is T): T[] {
		return Object.values(target).reduce(
			(result: T[], scope) => (
				is(scope) ? result.push(scope) : flatFind(scope, is).forEach(value => result.push(value)), result
			),
			[]
		)
	}
	export function flatConstant<T>(target: Nest<T>, levels: number): T[] {
		levels--
		return Object.values(target).reduce(
			(result: T[], scope) => (
				levels <= 0
					? result.push(scope as T)
					: flat.constant(scope as Nest<T>, levels).forEach(value => result.push(value)),
				result
			),
			[]
		)
	}
}
