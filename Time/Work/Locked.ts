import { isly } from "isly"
import { Base } from "../Base"

export interface Locked extends Base.Locked {
	invoice?: true
}
export namespace Locked {
	export const type = Base.Locked.type.extend<Locked>({
		invoice: isly.boolean(true).optional(),
	})
}
