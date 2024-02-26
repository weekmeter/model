import { fixtures } from "../fixtures"
import { Base } from "./Base"

describe("Report.Base", () => {
	it("is", () => {
		expect(Base.is({ modified: fixtures.modified() })).toEqual(true)
	})
})
