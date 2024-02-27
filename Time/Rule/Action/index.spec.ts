import { Action } from "./index"

describe("Rule.Action", () => {
	it("is", () => {
		expect(Action.is("set")).toEqual(true)
		expect(Action.is("adjust")).toEqual(true)
		expect(Action.is("action")).toEqual(false)
	})
	it("parse", () => {
		expect(
			Action.parse("set", remainder => {
				expect(remainder).toEqual("")
				return {}
			})
		).toEqual({ action: "set" })
		expect(
			Action.parse("adjust", remainder => {
				expect(remainder).toEqual("")
				return {}
			})
		).toEqual({ action: "adjust" })
		expect(
			Action.parse("set remainder", remainder => {
				expect(remainder).toEqual("remainder")
				return {}
			})
		).toEqual({
			action: "set",
		})
		expect(
			Action.parse("set more remainder", remainder => {
				expect(remainder).toEqual("more remainder")
				return {}
			})
		).toEqual({
			action: "set",
		})
		// failing
		expect(
			Action.parse("action", remainder => {
				expect(remainder).toEqual("")
				return {}
			})
		).toEqual({ action: undefined })
		expect(
			Action.parse("setgarbage", remainder => {
				expect(remainder).toEqual("")
				return {}
			})
		).toEqual({ action: undefined })
		expect(
			Action.parse("setgarbage remainder", remainder => {
				expect(remainder).toEqual("remainder")
				return {}
			})
		).toEqual({
			action: undefined,
		})
	})
})
