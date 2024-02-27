import { Percentage } from "./Percentage"

describe("Rule.Time.Percentage", () => {
	it("is", () => {
		expect(Percentage.is(0.8)).toEqual(true)
		expect(Percentage.is({ hours: 8 })).toEqual(false)
	})
	it("parse", () => {
		expect(Percentage.parse("80%")).toBeCloseTo(0.8)
		expect(Percentage.parse("80.2%")).toBeCloseTo(0.802)
		expect(Percentage.parse("80.%")).toBeCloseTo(0.8)
		expect(Percentage.parse("80.20%")).toBeCloseTo(0.802)
		expect(Percentage.parse("80.02%")).toBeCloseTo(0.8002)
		// failing
		expect(Percentage.parse("-80%")).toEqual(undefined)
		expect(Percentage.parse("-80.2%")).toEqual(undefined)
		expect(Percentage.parse("-80.%")).toEqual(undefined)
		expect(Percentage.parse("-80.20%")).toEqual(undefined)
		expect(Percentage.parse("-80.02%")).toEqual(undefined)

		expect(Percentage.parse("80")).toEqual(undefined)
		expect(Percentage.parse("80.2")).toEqual(undefined)
		expect(Percentage.parse("80.")).toEqual(undefined)
		expect(Percentage.parse("80.20")).toEqual(undefined)
		expect(Percentage.parse("80.02")).toEqual(undefined)
	})
	it("toString", () => {
		expect(Percentage.toString(0.8)).toEqual("80%")
		expect(Percentage.toString(0.802)).toEqual("80.2%")
		expect(Percentage.toString(0.8002)).toEqual("80.02%")
		expect(Percentage.toString(0.08)).toEqual("8%")
	})
})
