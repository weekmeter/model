import type { Time } from "./index"
import * as parental from "./Parental/fixtures"
import * as sick from "./Sick/fixtures"
import * as unpaid from "./Unpaid/fixtures"
import * as vacation from "./Vacation/fixtures"
import * as work from "./Work/fixtures"

export const create = Object.assign(createTimes, {
	sick,
	unpaid,
	parental: parental,
	vacation,
	work,
	changeable: createTimesChangeables,
})
function createTimesChangeables(n: number = 1): Time.Changeable[] {
	return new Array<Time.Changeable>()
		.concat(sick.create.changeable(n))
		.concat(unpaid.create.changeable(n))
		.concat(parental.create.changeable(n))
		.concat(vacation.create.changeable(n))
		.concat(work.create.changeable(n))
}

function createTimes(n: number = 1): Time[] {
	return new Array<Time>()
		.concat(sick.create(Math.trunc(n)))
		.concat(unpaid.create(n))
		.concat(parental.create(n))
		.concat(vacation.create(n))
		.concat(work.create(n))
}
