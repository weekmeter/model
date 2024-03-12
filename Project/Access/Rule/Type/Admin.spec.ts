import { weekmeter } from "../../../../index"

describe("Project.Access.Rule.Type.Admin", () => {
	it("value", () => {
		const value: weekmeter.Project.Access.Rule.Type.Admin = weekmeter.Project.Access.Rule.Type.Admin.value
		expect(value).toEqual("admin")
	})
	it("is", () => {
		expect(weekmeter.Project.Access.Rule.Type.Admin.is(weekmeter.Project.Access.Rule.Type.Admin.value))
	})
})
