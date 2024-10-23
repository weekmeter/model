import { isoly } from "isoly"
import { weekmeter } from "../index"

describe("weekmeter.Scope.Month", () => {
	it("is", () => {
		expect(weekmeter.Scope.Month.is("2024-01")).toEqual(true)
		expect(weekmeter.Scope.Month.is("2024-01-01")).toEqual(false)
		expect(weekmeter.Scope.Month.is("2024-W01")).toEqual(false)
	})
	it("next", () => {
		expect(weekmeter.Scope.Month.next("2023-12")).toEqual("2024-01")
		expect(weekmeter.Scope.Month.next("2024-01")).toEqual("2024-02")
	})
	it("previous", () => {
		expect(weekmeter.Scope.Month.previous("2024-01")).toEqual("2023-12")
		expect(weekmeter.Scope.Month.previous("2024-02")).toEqual("2024-01")
	})
	it("first", () => {
		expect(weekmeter.Scope.Month.first("2024-01")).toEqual("2024-01-01")
		expect(weekmeter.Scope.Month.first("2024-02")).toEqual("2024-02-01")
		expect(weekmeter.Scope.Month.first("2023-03")).toEqual("2023-03-01")
		expect(weekmeter.Scope.Month.first("2022-04")).toEqual("2022-04-01")
	})
	it("first -> from -> first", () => {
		expect(weekmeter.Scope.Month.from(weekmeter.Scope.Month.first("2024-01"))).toEqual("2024-01")
		expect(weekmeter.Scope.Month.from(weekmeter.Scope.Month.first("2024-02"))).toEqual("2024-02")
		expect(weekmeter.Scope.Month.from(weekmeter.Scope.Month.first("2023-03"))).toEqual("2023-03")
		expect(weekmeter.Scope.Month.from(weekmeter.Scope.Month.first("2022-04"))).toEqual("2022-04")
	})
	it("last", () => {
		expect(weekmeter.Scope.Month.last("2024-01")).toEqual("2024-01-31")
		expect(weekmeter.Scope.Month.last("2024-02")).toEqual("2024-02-29")
		expect(weekmeter.Scope.Month.last("2023-03")).toEqual("2023-03-31")
		expect(weekmeter.Scope.Month.last("2022-04")).toEqual("2022-04-30")
	})
	it("getYear", () => {
		expect(weekmeter.Scope.Month.getYear("2024-01")).toEqual(2024)
		expect(weekmeter.Scope.Month.getYear("2024-02")).toEqual(2024)
		expect(weekmeter.Scope.Month.getYear("2023-03")).toEqual(2023)
		expect(weekmeter.Scope.Month.getYear("2022-04")).toEqual(2022)
	})
	it("getMonth", () => {
		expect(weekmeter.Scope.Month.getMonth("2024-01")).toEqual(1)
		expect(weekmeter.Scope.Month.getMonth("2024-02")).toEqual(2)
		expect(weekmeter.Scope.Month.getMonth("2023-03")).toEqual(3)
		expect(weekmeter.Scope.Month.getMonth("2022-04")).toEqual(4)
	})
	it("length", () => {
		expect(weekmeter.Scope.Month.length("2024-01")).toEqual(31)
		expect(weekmeter.Scope.Month.length("2024-02")).toEqual(29)
		expect(weekmeter.Scope.Month.length("2023-03")).toEqual(31)
		expect(weekmeter.Scope.Month.length("2022-04")).toEqual(30)
	})
	it("getDay", () => {
		expect(weekmeter.Scope.Month.getDay("2024-01", 0)).toEqual("2024-01-01")
		expect(weekmeter.Scope.Month.getDay("2024-02", 28)).toEqual("2024-02-29")
		expect(weekmeter.Scope.Month.getDay("2023-03", 30)).toEqual("2023-03-31")
		expect(weekmeter.Scope.Month.getDay("2022-04", 29)).toEqual("2022-04-30")
	})
	it("getDays", () => {
		expect(weekmeter.Scope.Month.getDays("2024-01")).toEqual(
			isoly.DateRange.toDates({ start: "2024-01-01", end: "2024-01-31" }, true)
		)
		expect(weekmeter.Scope.Month.getDays("2024-02")).toEqual(
			isoly.DateRange.toDates({ start: "2024-02-01", end: "2024-02-29" }, true)
		)
		expect(weekmeter.Scope.Month.getDays("2023-03")).toEqual(
			isoly.DateRange.toDates({ start: "2023-03-01", end: "2023-03-31" }, true)
		)
		expect(weekmeter.Scope.Month.getDays("2022-04")).toEqual(
			isoly.DateRange.toDates({ start: "2022-04-01", end: "2022-04-30" }, true)
		)
	})
})
