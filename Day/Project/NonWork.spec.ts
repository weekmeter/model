import { weekmeter } from "../../index"

describe("weekmeter.Day.Project.NonWork", () => {
	it("is", () => {
		expect(weekmeter.Day.Project.NonWork.is("client/project")).toEqual(false)
		expect(weekmeter.Day.Project.NonWork.is("non-work")).toEqual(true)
		expect(weekmeter.Day.Project.NonWork.is("sleep")).toEqual(false)
	})
})
