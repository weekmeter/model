import { weekmeter } from "../../../../index"

describe("Project.Access.Rule.Type.View", () => {
	it("value", () => {
		const value: weekmeter.Project.Access.Rule.Type.View = weekmeter.Project.Access.Rule.Type.View.value
		expect(value).toEqual("view")
	})
	it("is", () => {
		expect(weekmeter.Project.Access.Rule.Type.View.is(weekmeter.Project.Access.Rule.Type.View.value))
	})
})
