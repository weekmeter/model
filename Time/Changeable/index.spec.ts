import { Type } from "../Type"
import * as workFixtures from "../Work/fixtures"
import * as fixtures from "./fixtures"
import { Changeable } from "./index"

describe("testing", () => {
	it("scope", () => {
		const n = 1000
		const times: Changeable[] = (
			Type.value.filter(type => type != "work").flatMap(type => fixtures.createChangeableBases(type, n)) as Changeable[]
		).concat(workFixtures.create.creatable(n))
		const result = Changeable.scope(times, times[0].organization, times[0].email)
		expect(result).toBeTruthy()
	})
})
