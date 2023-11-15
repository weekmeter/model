import { isoly } from "isoly"
import * as fixtures from "../fixtures"
import { weekmeter } from "../index"
import { Adjust } from "./Adjust"
import { Percentage } from "./Adjust/Percentage"
import { Span } from "./Adjust/Span"
import { Set } from "./Set"

describe("Rule", () => {
	it("is", () => {
		const rules = fixtures.getRuleArray("8h")
		rules.forEach(rule => expect(weekmeter.Rule.is(rule)).toEqual(true))
		rules.forEach(rule => expect(weekmeter.Rule.is((({ value, ...rule }) => rule)(rule))).toEqual(false))
		rules.forEach(rule => expect(weekmeter.Rule.is((({ name, ...rule }) => rule)(rule))).toEqual(false))
	})
	it("parse", () => {
		const span = weekmeter.Rule.parse("adjust 8h weekDay:Wednesday")
		const percentage = weekmeter.Rule.parse("adjust 80% weekDay:Wednesday")
		const set = weekmeter.Rule.parse("set 8h weekDay:Wednesday")
		const notSupported = weekmeter.Rule.parse("set 80% weekDay:Wednesday")
		expect(Adjust.is(span)).toEqual(true)
		expect(Adjust.is(percentage)).toEqual(true)
		expect(Span.is(span)).toEqual(true)
		expect(Percentage.is(percentage)).toEqual(true)
		expect(Set.is(set)).toEqual(true)
		expect(notSupported).toEqual(undefined)
	})
	it("8h day", () => {
		const rules = fixtures.getRuleArray("8h")
		const result = weekmeter.Rule.expected("jessie@rocket.com", { start: "2023-04-10", end: "2023-04-16" }, rules)
		expect(result?.hours).toBeCloseTo(40)
		expect(result?.minutes).toEqual(undefined)
		expect(isoly.TimeSpan.toHours(result ?? {})).toBeCloseTo(40)
	})
	it("7.5h day", () => {
		const rules = fixtures.getRuleArray("7:30h")
		const result = weekmeter.Rule.expected("jessie@rocket.com", { start: "2023-04-10", end: "2023-04-16" }, rules)
		expect(isoly.TimeSpan.toHours(result ?? {})).toBeCloseTo(37.5)
	})
	it("8h day Maundy Thursday (half day + day off)", () => {
		const rules = [...fixtures.getRuleArray("8h"), "adjust 50% date:2023-04-03", "set 0h date:2023-04-07"]
		const result = weekmeter.Rule.expected("jessie@rocket.com", { start: "2023-04-03", end: "2023-04-09" }, rules)
		expect(isoly.TimeSpan.toHours(result ?? {})).toBeCloseTo(28)
	})
	it("7.5h day Maundy Thursday", () => {
		const rules = [...fixtures.getRuleArray("7:30h"), "adjust 50% date:2023-04-03", "set 0h date:2023-04-07"]
		const result = weekmeter.Rule.expected("jessie@rocket.com", { start: "2023-04-03", end: "2023-04-09" }, rules)
		expect(isoly.TimeSpan.toHours(result ?? {})).toBeCloseTo(26.25)
	})
	it("8h day Maundy Thursday 80%", () => {
		const rules = [
			...fixtures.getRuleArray("8h"),
			"adjust 50% date:2023-04-06",
			"set 0h date:2023-04-07",
			"adjust 80% user:jessie@rocket*",
		]
		const result = weekmeter.Rule.expected("jessie@rocket.com", { start: "2023-04-03", end: "2023-04-09" }, rules)
		expect(isoly.TimeSpan.toHours(result ?? {})).toBeCloseTo(22.4)
	})
})
