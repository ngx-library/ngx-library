import { CUSTOM_ATTRIBUTES_RESOURCES } from './custom-attributes-resources.model';
import { USERS_RESOURCES } from './users-resources.model';

export const STANDALONE_RESOURCES = {
  CUSTOM_ATTRIBUTES: (userId: number, customAttributeKey?: string, context?: string) =>
    `${CUSTOM_ATTRIBUTES_RESOURCES.CUSTOM_ATTRIBUTES(customAttributeKey, USERS_RESOURCES.USERS(userId, context))}`
};
