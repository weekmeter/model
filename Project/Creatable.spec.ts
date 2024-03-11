import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

describe("project.Creatable", () => {
	it("is", () => {
		const creatable = fixtures.project.creatable()
		expect(weekmeter.Project.Creatable.is(creatable)).toEqual(true)
		expect(weekmeter.Project.Creatable.is((({ name, ...creatable }) => creatable)(creatable))).toEqual(false)
		expect(weekmeter.Project.Creatable.is({ ...creatable, name: 123 })).toEqual(false)
	})

	it("get", () => {
		const creatable = { ...fixtures.project.creatable(), from: "Testing" }
		expect(weekmeter.Project.Creatable.type.get(creatable)).toEqual(fixtures.project.creatable())
		expect(weekmeter.Project.Creatable.type.get({ name: "asd" })).toEqual(undefined)
	})
	it("key", () => {
		const project = fixtures.project()
		expect(weekmeter.Project.Creatable.key(project)).toEqual("------o0|------c0|------p0")
	})
})
