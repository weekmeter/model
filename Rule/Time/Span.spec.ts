import { Span } from "./Span"

describe("Rule.Time.Span", () => {
	it("is", () => {
		expect(Span.is({ hours: 8 })).toEqual(true)
		expect(Span.is({ minutes: 8 })).toEqual(true)
		expect(Span.is({ hours: 8, minutes: 8 })).toEqual(true)
		expect(Span.is(0.8)).toEqual(false)
		expect(Span.type.get({ days: 8, hours: 8, minutes: 8 })).toEqual({ hours: 8, minutes: 8 })
	})
	it("parse", () => {
		expect(Span.parse("8:50h")).toEqual({ hours: 8, minutes: 50 })
		expect(Span.parse("8:h")).toEqual({ hours: 8, minutes: undefined })
		expect(Span.parse("8:00h")).toEqual({ hours: 8, minutes: undefined })
		expect(Span.parse("888:00h")).toEqual({ hours: 888, minutes: undefined })
		expect(Span.parse("0:30h")).toEqual({ hours: 0, minutes: 30 })
		expect(Span.parse("0:3h")).toEqual({ hours: 0, minutes: 3 })
		expect(Span.parse("1:45h")).toEqual({ hours: 1, minutes: 45 })
		expect(Span.parse("666:666h")).toEqual({ hours: 666, minutes: 666 })
		// negative
		expect(Span.parse("-8:50h")).toEqual({ hours: -8, minutes: -50 })
		expect(Span.parse("-8:h")).toEqual({ hours: -8, minutes: undefined })
		expect(Span.parse("-8:00h")).toEqual({ hours: -8, minutes: undefined })
		expect(Span.parse("-888:00h")).toEqual({ hours: -888, minutes: undefined })
		expect(Span.parse("-0:30h")).toEqual({ hours: -0, minutes: -30 })
		expect(Span.parse("-0:3h")).toEqual({ hours: -0, minutes: -3 })
		expect(Span.parse("-1:45h")).toEqual({ hours: -1, minutes: -45 })
		expect(Span.parse("-666:666h")).toEqual({ hours: -666, minutes: -666 })
		// failing
		expect(Span.parse("8:50")).toEqual(undefined)
		expect(Span.parse("8:")).toEqual(undefined)
		expect(Span.parse("8:00")).toEqual(undefined)
		expect(Span.parse("888:00")).toEqual(undefined)
		expect(Span.parse("0:30")).toEqual(undefined)
		expect(Span.parse("0:3")).toEqual(undefined)
		expect(Span.parse("1:45")).toEqual(undefined)
		expect(Span.parse("666:666")).toEqual(undefined)
	})
})
