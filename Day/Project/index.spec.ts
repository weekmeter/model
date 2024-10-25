import { weekmeter } from "../../index"

describe("weekmeter.Day.Project", () => {
	it("is", () => {
		expect(weekmeter.Day.Project.is("client/project")).toEqual(true)
		expect(weekmeter.Day.Project.is("non-work")).toEqual(true)
		expect(weekmeter.Day.Project.is("sleep")).toEqual(false)
	})
})
