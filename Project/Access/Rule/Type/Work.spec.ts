import { weekmeter } from "../../../../index"
describe("Project.Access.Type.Work", () => {
	it("value", () => {
		const value: weekmeter.Project.Access.Rule.Type.Work = weekmeter.Project.Access.Rule.Type.Work.value
		expect(value).toEqual("work")
	})
	it("is", () => {
		expect(weekmeter.Project.Access.Rule.Type.Work.is(weekmeter.Project.Access.Rule.Type.Work.value)).toEqual(true)
	})
})
