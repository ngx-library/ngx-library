import { ACCESS_REQUESTS_RESOURCES } from './access-requests-resources.model';
import { CUSTOM_ATTRIBUTES_RESOURCES } from './custom-attributes-resources.model';
import { REGISTRY_REPOSITORIES_RESOURCES } from './registry-repositories-resources.model';
import { encodeId, safeContext } from './utils.model';

export const GROUPS_RESOURCES = {
  GROUPS: (groupId?: number | string, context?: string) => `${safeContext(context)}/groups${encodeId(groupId)}`,
  ACCESS_REQUESTS: (groupId: number | string, userId?: number, context?: string) =>
    `${ACCESS_REQUESTS_RESOURCES.ACCESS_REQUESTS(userId, GROUPS_RESOURCES.GROUPS(groupId, context))}`,
  ACCESS_REQUESTS_APPROVE: (groupId: number | string, userId: number, context?: string) =>
    `${ACCESS_REQUESTS_RESOURCES.APPROVE(userId, GROUPS_RESOURCES.GROUPS(groupId, context))}`,
  REGISTRY_REPOSITORIES: (groupId: number | string, context?: string) =>
    `${REGISTRY_REPOSITORIES_RESOURCES.REGISTRY_REPOSITORIES(undefined, GROUPS_RESOURCES.GROUPS(groupId, context))}`,
  CUSTOM_ATTRIBUTES: (groupId: number | string, customAttributeKey?: string, context?: string) =>
    `${CUSTOM_ATTRIBUTES_RESOURCES.CUSTOM_ATTRIBUTES(customAttributeKey, GROUPS_RESOURCES.GROUPS(groupId, context))}`
};
