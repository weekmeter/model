import { Adjust } from "./Adjust"

describe("Rule.Action.Adjust", () => {
	it("is", () => {
		expect(Adjust.is("adjust")).toEqual(true)
		expect(Adjust.is("set")).toEqual(false)
	})
	it("parse", () => {
		expect(Adjust.parse("adjust")).toEqual("adjust")
		expect(Adjust.parse("set")).toEqual(undefined)
	})
})
