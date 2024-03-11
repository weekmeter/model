import { Set } from "./Set"

describe("Rule.Action.Set", () => {
	it("is", () => {
		expect(Set.is("set")).toEqual(true)
		expect(Set.is("adjust")).toEqual(false)
	})
	it("parse", () => {
		expect(Set.parse("set")).toEqual("set")
		expect(Set.parse("adjust")).toEqual(undefined)
	})
})
