import { weekmeter } from "../../../../index"

describe("Project.Access.Rule.Type", () => {
	it("is", () => {
		expect(weekmeter.Project.Access.Rule.Type.is(weekmeter.Project.Access.Rule.Type.Work.value)).toEqual(true)
	})
})
