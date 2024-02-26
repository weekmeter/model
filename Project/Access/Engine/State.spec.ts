// import from root when done
import { weekmeter } from "../../../index"
import { engine } from "./fixtures"

describe("Project.Access.Engine", () => {
	it("is", () => {
		let state: weekmeter.Project.Access.Engine.State
		state = engine.state()
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
