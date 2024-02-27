import { immerable } from 'immer';

export interface LineProduct {
  readonly id: string;

  readonly productID: string;

  configurationIDs: string[];

  quantity: number;
}

export class LineProductImpl implements LineProduct {
  [immerable] = true;

  constructor(productID: string, configurationIDs: string[], quantity: number) {
    this.productID = productID;
    this.configurationIDs = configurationIDs;
    this.quantity = quantity;
  }

  get id(): string {
    const configHash = [...this.configurationIDs].sort().join('-');
    return `${this.productID}-${configHash}`;
  }

  readonly productID: string;

  configurationIDs: string[];

  quantity: number;
}
