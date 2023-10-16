import * as fixtures from "../fixtures"
import { weekmeter } from "../index"

describe("Project", () => {
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

describe("Creatable", () => {
	it("is", () => {
		const creatable = fixtures.getProject.creatable()
		expect(weekmeter.Project.Creatable.is(creatable)).toEqual(true)
		expect(weekmeter.Project.Creatable.is((({ name, ...creatable }) => creatable)(creatable))).toEqual(false)
		expect(weekmeter.Project.Creatable.is({ ...creatable, name: 123 })).toEqual(false)
	})

	it("get", () => {
		const creatable = { ...fixtures.getProject.creatable(), from: "Testing" }
		expect(weekmeter.Project.Creatable.type.get(creatable)).toEqual(fixtures.getProject.creatable())
		expect(weekmeter.Project.Creatable.type.get({ name: "asd" })).toEqual(undefined)
	})
})
