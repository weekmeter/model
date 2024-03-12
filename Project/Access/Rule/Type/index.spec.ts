import { weekmeter } from "../../../../index"

describe("Project.Access.Rule.Type", () => {
	it("is", () => {
		expect(weekmeter.Project.Access.Rule.Type.is(weekmeter.Project.Access.Rule.Type.Work.value)).toEqual(true)
		expect(weekmeter.Project.Access.Rule.Type.is(weekmeter.Project.Access.Rule.Type.View.value)).toEqual(true)
		expect(weekmeter.Project.Access.Rule.Type.is(weekmeter.Project.Access.Rule.Type.Admin.value)).toEqual(true)
	})
	it("values", () => {
		expect(weekmeter.Project.Access.Rule.Type.values.includes(weekmeter.Project.Access.Rule.Type.Work.value)).toEqual(
			true
		)
		expect(weekmeter.Project.Access.Rule.Type.values.includes(weekmeter.Project.Access.Rule.Type.View.value)).toEqual(
			true
		)
		expect(weekmeter.Project.Access.Rule.Type.values.includes(weekmeter.Project.Access.Rule.Type.Admin.value)).toEqual(
			true
		)
	})
})
