import { weekmeter } from "../index"

describe("weekmeter.Scope.Length", () => {
	it("is", () => {
		expect(weekmeter.Scope.Length.is("month")).toEqual(true)
		expect(weekmeter.Scope.Length.is("week")).toEqual(true)
		expect(weekmeter.Scope.Length.is("day")).toEqual(true)
		expect(weekmeter.Scope.Length.is("year")).toEqual(false)
	})
})
