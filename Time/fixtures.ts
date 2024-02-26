import type { Time } from "./index"
import { parental } from "./Parental/fixtures"
import { sick } from "./Sick/fixtures"
import { unpaid } from "./Unpaid/fixtures"
import { vacation } from "./Vacation/fixtures"
import { work } from "./Work/fixtures"

export const time = Object.assign(createTimes, {
	sick,
	unpaid,
	parental: parental,
	vacation,
	work,
	changeable: createTimesChangeables,
})
function createTimesChangeables(n: number = 1): Time.Changeable[] {
	return new Array<Time.Changeable>()
		.concat(sick.changeable(n))
		.concat(unpaid.changeable(n))
		.concat(parental.changeable(n))
		.concat(vacation.changeable(n))
		.concat(work.changeable(n))
}

function createTimes(n: number = 1): Time[] {
	return new Array<Time>()
		.concat(sick(Math.trunc(n)))
		.concat(unpaid(n))
		.concat(parental(n))
		.concat(vacation(n))
		.concat(work(n))
}
