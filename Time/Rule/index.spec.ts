import { isoly } from "isoly"
import { fixtures } from "../../fixtures"
import { weekmeter } from "../../index"
import { Adjust } from "./Adjust"
import { Percentage } from "./Adjust/Percentage"
import { Span } from "./Adjust/Span"
import { Set } from "./Set"

describe("Rule", () => {
	it("is", () => {
		const rules = fixtures.time.rule.array("8h")
		rules.forEach(rule => expect(weekmeter.Time.Rule.is(rule)).toEqual(true))
		rules.forEach(rule => expect(weekmeter.Time.Rule.is((({ value, ...rule }) => rule)(rule))).toEqual(false))
		rules.forEach(rule => expect(weekmeter.Time.Rule.is((({ name, ...rule }) => rule)(rule))).toEqual(false))
	})
	it("parse", () => {
		const span = weekmeter.Time.Rule.parse("adjust 8h day:Wednesday")
		const percentage = weekmeter.Time.Rule.parse("adjust 80% day:Wednesday")
		const set = weekmeter.Time.Rule.parse("set 8h day:Wednesday")
		const notSupported = weekmeter.Time.Rule.parse("set 80% day:Wednesday")
		expect(Adjust.is(span)).toEqual(true)
		expect(Adjust.is(percentage)).toEqual(true)
		expect(Span.is(span)).toEqual(true)
		expect(Percentage.is(percentage)).toEqual(true)
		expect(Set.is(set)).toEqual(true)
		expect(notSupported).toEqual(undefined)
	})
	it("8h day", () => {
		const rules = fixtures.time.rule.array("8h")
		const result = weekmeter.Time.Rule.expected(
			{ email: "jessie@rocket.com" },
			{ start: "2023-04-10", end: "2023-04-16" },
			rules
		)
		expect(result?.hours).toBeCloseTo(40)
		expect(result?.minutes).toEqual(undefined)
		expect(isoly.TimeSpan.toHours(result ?? {})).toBeCloseTo(40)
	})
	it("7.5h day", () => {
		const rules = fixtures.time.rule.array("7:30h")
		const result = weekmeter.Time.Rule.expected(
			{ email: "jessie@rocket.com" },
			{ start: "2023-04-10", end: "2023-04-16" },
			rules
		)
		expect(isoly.TimeSpan.toHours(result ?? {})).toBeCloseTo(37.5)
	})
	it("8h day Maundy Thursday (half day + day off)", () => {
		const rules = [...fixtures.time.rule.array("8h"), "adjust 50% date:2023-04-03", "set 0h date:2023-04-07"]
		const result = weekmeter.Time.Rule.expected(
			{ email: "jessie@rocket.com" },
			{ start: "2023-04-03", end: "2023-04-09" },
			rules
		)
		expect(isoly.TimeSpan.toHours(result ?? {})).toBeCloseTo(28)
	})
	it("7.5h day Maundy Thursday", () => {
		const rules = [...fixtures.time.rule.array("7:30h"), "adjust 50% date:2023-04-03", "set 0h date:2023-04-07"]
		const result = weekmeter.Time.Rule.expected(
			{ email: "jessie@rocket.com" },
			{ start: "2023-04-03", end: "2023-04-09" },
			rules
		)
		expect(isoly.TimeSpan.toHours(result ?? {})).toBeCloseTo(26.25)
	})
	it("8h day Maundy Thursday 80%", () => {
		const rules = [
			...fixtures.time.rule.array("8h"),
			"adjust 50% date:2023-04-06",
			"set 0h date:2023-04-07",
			"adjust 80% user.email:jessie@rocket*",
		]
		const result = weekmeter.Time.Rule.expected(
			{ email: "jessie@rocket.com" },
			{ start: "2023-04-03", end: "2023-04-09" },
			rules
		)
		expect(isoly.TimeSpan.toHours(result ?? {})).toBeCloseTo(22.4)
	})
	it("numbered, 0-padded and named weekday", () => {
		const rules = [...fixtures.time.rule.array("8h"), "set 0h day:04 day:4 day:Tuesday"]
		const result = weekmeter.Time.Rule.expected(
			{ email: "jessie@rocket.com" },
			{ start: "2023-04-03", end: "2023-04-05" },
			rules
		)
		expect(isoly.TimeSpan.toHours(result ?? {})).toBeCloseTo(16)
	})
	it("numbered and 0-padded month", () => {
		const rules = [...fixtures.time.rule.array("8h"), "set 0h month:4 month:4"]
		const result = weekmeter.Time.Rule.expected(
			{ email: "jessie@rocket.com" },
			{ start: "2023-04-03", end: "2023-04-05" },
			rules
		)
		expect(isoly.TimeSpan.toHours(result ?? {})).toBeCloseTo(0)
	})
	it("numbered and 0-padded week", () => {
		const rules = [...fixtures.time.rule.array("8h"), "set 0h week:04 week:4"]
		const result = weekmeter.Time.Rule.expected(
			{ email: "jessie@rocket.com" },
			{ start: "2023-01-25", end: "2023-01-27" },
			rules
		)
		expect(isoly.TimeSpan.toHours(result ?? {})).toBeCloseTo(0)
	})
	it("Rule with property condition", () => {
		const rules = [
			...fixtures.time.rule.array("8h"),
			{ name: "Sweden Sunday", value: "set 8h user.country:SE day:Sunday" },
		]
		const profile = fixtures.user.profile()
		const result = weekmeter.Time.Rule.expected(profile, { start: "2024-01-15", end: "2024-01-21" }, rules)
		expect(isoly.TimeSpan.toHours(result ?? {})).toBeCloseTo(48)
	})
})
