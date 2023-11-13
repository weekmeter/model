import { Base } from "./Base"
describe("Rule.Time.Base", () => {
	it("safe", () => {
		expect(Base.safe(1)).toEqual(true)
		expect(Base.safe(-1)).toEqual(true)
		expect(Base.safe(NaN)).toEqual(false)
		expect(Base.safe(Infinity)).toEqual(false)
		expect(Base.safe(-Infinity)).toEqual(false)
		expect(Base.safe(0.5)).toEqual(true)
	})
})
