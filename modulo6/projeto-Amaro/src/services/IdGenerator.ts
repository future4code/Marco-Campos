import { v4 } from "uuid"

class IdGenerator {
    generateId = (): string => v4()
}

export const idGenerator = new IdGenerator()