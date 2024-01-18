import { isly } from "isly"
import { Property } from "./Property"

export interface Changeable {
	properties: Property[]
}
export namespace Changeable {
	export const type = isly.object<Changeable>({
		properties: isly.array(Property.type),
	})
}
