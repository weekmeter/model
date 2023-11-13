import { Time } from "./index"

describe("Rule.Time", () => {
	it("is", () => {
		expect(Time.is(8)).toEqual(true)
		expect(Time.is({ hours: 5, minutes: 30 })).toEqual(true)
		expect(Time.is({})).toEqual(true)
		expect(Time.is("8")).toEqual(false)
	})
	it("parse", () => {
		expect(
			Time.parse("8h remainder", remainder => {
				expect(remainder).toEqual("remainder")
				return {}
			})
		).toEqual({ time: { hours: 8 } })
		expect(
			Time.parse("80% remainder", remainder => {
				expect(remainder).toEqual("remainder")
				return {}
			})
		).toEqual({ time: 0.8 })
		expect(
			Time.parse("8h more remainder", remainder => {
				expect(remainder).toEqual("more remainder")
				return {}
			})
		).toEqual({ time: { hours: 8 } })
		expect(
			Time.parse("8h ", remainder => {
				expect(remainder).toEqual("")
				return {}
			})
		).toEqual({ time: { hours: 8 } })
		expect(
			Time.parse("8h  ", remainder => {
				expect(remainder).toEqual(" ")
				return {}
			})
		).toEqual({ time: { hours: 8 } })
		//failing
		expect(
			Time.parse("80%garbage", remainder => {
				expect(remainder).toEqual("")
				return {}
			})
		).toEqual({ time: undefined })
		expect(
			Time.parse("80%garbage remainder", remainder => {
				expect(remainder).toEqual("remainder")
				return {}
			})
		).toEqual({ time: undefined })
	})
})
