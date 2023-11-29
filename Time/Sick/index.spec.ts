import { isoly } from "isoly"
import { Time } from "../index"
// import { Sick } from "./index"

describe("Sick", () => {
	it("testing", () => {
		const time: Time = {
			type: "sick",
			organization: "---o1---",
			email: "jessie@rocket.com",
			date: isoly.Date.now(),
			value: { hours: 1 },
			modified: { by: "jessie@rocket.com", value: isoly.DateTime.now() },
		}
		const result = Time.is((({ type, ...time }) => ({ ...time, type: "work" }))(time))
		console.log(result)
		expect(result).toEqual(false)
		expect(Time.type.get({ ...time, project: "testing" })).toEqual(time)
	})
})
