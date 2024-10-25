import { Nest } from "./index"

describe("Scope", () => {
	it("insert", () => {
		const target = { foo: { bar: 1 } }
		Nest.insert(target, 2, ["foo", "baz"])
		expect(target).toEqual({ foo: { bar: 1, baz: 2 } })
	})
	it("flat", () => {
		expect(Nest.flat.constant<number>({ foo: 1 }, 1)).toEqual([1])
		expect(
			Nest.flat<number>(
				{ foo: 1, bar: { foo: 2, baz: 3 }, baz: { bar: { foo: 4 } } },
				(value): value is number => typeof value == "number"
			)
		).toEqual([1, 2, 3, 4])
		const constant = { foo: { bar: [1, 2, 3] } }
		expect(Nest.flat.constant<number[]>(constant, 1)).toEqual([{ bar: [1, 2, 3] }])
		expect(Nest.flat.constant<number[]>(constant, 2)).toEqual([[1, 2, 3]])
		expect(Nest.flat.constant<number[]>(constant, 3)).toEqual([1, 2, 3])
	})
})
