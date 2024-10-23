import { isoly } from "isoly"
import { weekmeter } from "../index"

describe("weekmeter.Scope.Week", () => {
	it("first", () => {
		expect(weekmeter.Scope.Week.first("2024-W01")).toEqual("2024-01-01")
		expect(weekmeter.Scope.Week.first("2023-W01")).toEqual("2023-01-02")
		expect(weekmeter.Scope.Week.first("2022-W01")).toEqual("2022-01-03")
		expect(weekmeter.Scope.Week.first("2021-W01")).toEqual("2021-01-04")
		expect(weekmeter.Scope.Week.first("2020-W01")).toEqual("2019-12-30")
		expect(weekmeter.Scope.Week.first("2019-W01")).toEqual("2018-12-31")
	})
	it("first -> from -> first", () => {
		expect(weekmeter.Scope.Week.from(weekmeter.Scope.Week.first("2024-W01"))).toEqual("2024-W01")
		expect(weekmeter.Scope.Week.from(weekmeter.Scope.Week.first("2023-W01"))).toEqual("2023-W01")
		expect(weekmeter.Scope.Week.from(weekmeter.Scope.Week.first("2022-W01"))).toEqual("2022-W01")
		expect(weekmeter.Scope.Week.from(weekmeter.Scope.Week.first("2021-W01"))).toEqual("2021-W01")
		expect(weekmeter.Scope.Week.from(weekmeter.Scope.Week.first("2020-W01"))).toEqual("2020-W01")
		expect(weekmeter.Scope.Week.from(weekmeter.Scope.Week.first("2019-W01"))).toEqual("2019-W01")
	})
	it("previous", () => {
		expect(weekmeter.Scope.Week.previous("2024-W01")).toEqual("2023-W52")
		expect(weekmeter.Scope.Week.previous("2023-W01")).toEqual("2022-W52")
		expect(weekmeter.Scope.Week.previous("2022-W01")).toEqual("2021-W52")
		expect(weekmeter.Scope.Week.previous("2021-W01")).toEqual("2020-W53")
		expect(weekmeter.Scope.Week.previous("2020-W01")).toEqual("2019-W52")
		expect(weekmeter.Scope.Week.previous("2019-W01")).toEqual("2018-W52")
	})
	it("next", () => {
		expect(weekmeter.Scope.Week.next("2023-W52")).toEqual("2024-W01")
		expect(weekmeter.Scope.Week.next("2022-W52")).toEqual("2023-W01")
		expect(weekmeter.Scope.Week.next("2021-W52")).toEqual("2022-W01")
		expect(weekmeter.Scope.Week.next("2020-W53")).toEqual("2021-W01")
		expect(weekmeter.Scope.Week.next("2019-W52")).toEqual("2020-W01")
		expect(weekmeter.Scope.Week.next("2018-W52")).toEqual("2019-W01")
	})
	it("getYear", () => {
		expect(weekmeter.Scope.Week.getYear("2024-W01")).toEqual(2024)
		expect(weekmeter.Scope.Week.getYear("2023-W01")).toEqual(2023)
		expect(weekmeter.Scope.Week.getYear("2022-W01")).toEqual(2022)
		expect(weekmeter.Scope.Week.getYear("2021-W01")).toEqual(2021)
		expect(weekmeter.Scope.Week.getYear("2020-W01")).toEqual(2020)
		expect(weekmeter.Scope.Week.getYear("2019-W01")).toEqual(2019)
	})
	it("getMonth", () => {
		expect(weekmeter.Scope.Week.getWeek("2024-W01")).toEqual(1)
		expect(weekmeter.Scope.Week.getWeek("2023-W01")).toEqual(1)
		expect(weekmeter.Scope.Week.getWeek("2022-W01")).toEqual(1)
		expect(weekmeter.Scope.Week.getWeek("2021-W01")).toEqual(1)
		expect(weekmeter.Scope.Week.getWeek("2020-W01")).toEqual(1)
		expect(weekmeter.Scope.Week.getWeek("2019-W01")).toEqual(1)
	})
	it("getDay", () => {
		expect(weekmeter.Scope.Week.getDay("2024-W01", 0)).toEqual("2024-01-01")
		expect(weekmeter.Scope.Week.getDay("2023-W01", 1)).toEqual("2023-01-03")
		expect(weekmeter.Scope.Week.getDay("2022-W01", 2)).toEqual("2022-01-05")
		expect(weekmeter.Scope.Week.getDay("2021-W01", 3)).toEqual("2021-01-07")
		expect(weekmeter.Scope.Week.getDay("2020-W01", 4)).toEqual("2020-01-03")
		expect(weekmeter.Scope.Week.getDay("2019-W01", 5)).toEqual("2019-01-05")
	})
	it("getDays", () => {
		expect(weekmeter.Scope.Week.getDays("2024-W01")).toEqual(
			isoly.DateRange.toDates({ start: "2024-01-01", end: "2024-01-07" }, true)
		)
		expect(weekmeter.Scope.Week.getDays("2023-W01")).toEqual(
			isoly.DateRange.toDates({ start: "2023-01-02", end: "2023-01-08" }, true)
		)
		expect(weekmeter.Scope.Week.getDays("2022-W01")).toEqual(
			isoly.DateRange.toDates({ start: "2022-01-03", end: "2022-01-09" }, true)
		)
		expect(weekmeter.Scope.Week.getDays("2021-W01")).toEqual(
			isoly.DateRange.toDates({ start: "2021-01-04", end: "2021-01-10" }, true)
		)
		expect(weekmeter.Scope.Week.getDays("2020-W01")).toEqual(
			isoly.DateRange.toDates({ start: "2019-12-30", end: "2020-01-05" }, true)
		)
		expect(weekmeter.Scope.Week.getDays("2019-W01")).toEqual(
			isoly.DateRange.toDates({ start: "2018-12-31", end: "2019-01-06" })
		)
	})
})
