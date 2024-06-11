interface AttributeDefinition {
  type: string;
  id: number;
  name: string;
  meta?: unknown;
}

export interface TypeAttributeDefinition extends AttributeDefinition {
  type: 'type';
  meta: {
    color: string;
  };
}

export interface SetAttributeDefinition extends AttributeDefinition {
  type: 'set';
  meta: {
    totalCards: number;
    year: number;
  };
}

export interface CardTypeAttributeDefinition extends AttributeDefinition {
  type: 'cardType';
  meta: unknown;
}

export interface RarityAttributeDefinition extends AttributeDefinition {
  type: 'rarity';
  meta: unknown;
}

export interface ConditionAttributeDefinition extends AttributeDefinition {
  type: 'condition';
  meta: unknown;
}
