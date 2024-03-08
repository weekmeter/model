import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

describe("Project.Creatable", () => {
	it("is", () => {
		const project = fixtures.project.creatable()
		expect(weekmeter.Project.Creatable.is(project)).toEqual(true)
	})
})
