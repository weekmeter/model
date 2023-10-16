import * as fixtures from "../fixtures"
import { weekmeter } from "../index"

describe("project", () => {
	it("is", () => {
		const project = fixtures.getProject()
		expect(weekmeter.Project.is(project)).toEqual(true)
		expect(weekmeter.Project.is((({ name, ...project }) => project)(project))).toEqual(false)
		expect(weekmeter.Project.is({ ...project, name: 123 })).toEqual(false)
	})

	it("get", () => {
		const project = { ...fixtures.getProject(), from: "Testing" }

		expect(weekmeter.Project.type.get(project)).toEqual(fixtures.getProject())
		expect(weekmeter.Project.type.get({ name: "asd" })).toEqual(undefined)
	})
})
