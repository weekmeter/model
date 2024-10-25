import { weekmeter } from "../../index"

describe("weekmeter.Day.Project.Work", () => {
	it("is", () => {
		expect(weekmeter.Day.Project.Work.is("client/project")).toEqual(true)
		expect(weekmeter.Day.Project.Work.is("non-work")).toEqual(false)
		expect(weekmeter.Day.Project.Work.is("sleep")).toEqual(false)
	})
})
