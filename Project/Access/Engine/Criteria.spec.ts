import { Criteria } from "./Criteria"

describe("Project.Access.Engine", () => {
	it("is/parse", () => {
		const criteria: Criteria = Criteria.parse("user.department:QA")
		expect(Criteria.is(criteria)).toEqual(true)
	})
})
