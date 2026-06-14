import { StatusDefinition } from "./Status";

export class StatusRegistry {
  private readonly statuses = new Map<string, StatusDefinition>();

  constructor(statuses?: Iterable<[string, StatusDefinition]>) {
    if (!statuses) return;

    for (const [id, definition] of statuses) {
      this.register(id, definition);
    }
  }

  register(id: string, definition: StatusDefinition) {
    this.statuses.set(id, definition);
  }

  get(id: string) {
    return this.statuses.get(id);
  }

  has(id: string) {
    return this.statuses.has(id);
  }
}
