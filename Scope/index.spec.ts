import { weekmeter } from "../index"

describe("weekmeter.Scope", () => {
	it("is", () => {
		expect(weekmeter.Scope.is("2024-01")).toEqual(true)
		expect(weekmeter.Scope.is("2024-01-01")).toEqual(true)
		expect(weekmeter.Scope.is("2024-W01")).toEqual(true)
		expect(weekmeter.Scope.is("20240101")).toEqual(false)
	})
	it("includes", () => {
		expect(weekmeter.Scope.includes("2024-W01", "2023-12-31")).toEqual(false)
		expect(weekmeter.Scope.includes("2020-W01", "2019-12-31")).toEqual(true)
		expect(weekmeter.Scope.includes("2024-02", "2024-02-29")).toEqual(true)
	})
})
