import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

describe("Project", () => {
	it("is", () => {
		const project = fixtures.project()
		expect(weekmeter.Project.is(project)).toEqual(true)
		expect(weekmeter.Project.is((({ name, ...project }) => project)(project))).toEqual(false)
		expect(weekmeter.Project.is({ ...project, name: 123 })).toEqual(false)
	})

	it("get", () => {
		const project = { ...fixtures.project(), from: "Testing" }
		expect(weekmeter.Project.type.get(project)).toEqual(fixtures.project())
		expect(weekmeter.Project.type.get({ name: "asd" })).toEqual(undefined)
	})
	it("key", () => {
		const project = fixtures.project()
		expect(weekmeter.Project.key(project)).toEqual(weekmeter.Project.Creatable.key(project))
	})
})
