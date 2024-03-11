import { fixtures } from "../../../fixtures"
import { weekmeter } from "../../../index"

describe("Project.Access.Engine", () => {
	it("is", () => {
		let state: weekmeter.Project.Access.Engine.State
		state = fixtures.project.access.engine.state()
		expect(weekmeter.Project.Access.Engine.State.is(state)).toEqual(true)
		state = {
			...state,
			user: (({ ...user }) => user)(state.user),
		}
		expect(weekmeter.Project.Access.Engine.State.is(state)).toEqual(true)
		expect(
			weekmeter.Project.Access.Engine.State.is({ ...state, user: (({ email, ...user }) => user)(state.user) })
		).toEqual(false)
	})
})
