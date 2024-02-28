import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

describe("Project.Changeable", () => {
	it("is", () => {
		const changeable: weekmeter.Project.Changeable = fixtures.project.changeable()
		expect(weekmeter.Project.Changeable.is(changeable)).toEqual(true)
	})
})
