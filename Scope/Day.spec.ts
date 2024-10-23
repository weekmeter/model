import { weekmeter } from "../index"

describe("weekmeter.Scope.Day", () => {
	it("is", () => {
		expect(weekmeter.Scope.Day.is("2024-01")).toEqual(false)
		expect(weekmeter.Scope.Day.is("2024-01-01")).toEqual(true)
		expect(weekmeter.Scope.Day.is("2024-W01")).toEqual(false)
	})
})
