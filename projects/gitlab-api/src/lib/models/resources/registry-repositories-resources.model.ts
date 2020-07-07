import { TAGS_RESOURCES } from './tags-resources.model';
import { encodeId, safeContext } from './utils.model';

export const REGISTRY_REPOSITORIES_RESOURCES = {
  REGISTRY_REPOSITORIES: (repositoryId?: number, context?: string) =>
    `${safeContext(context)}/registry/repositories${encodeId(repositoryId)}`,
  TAGS: (repositoryId: number, tagName?: string, context?: string) =>
    `${TAGS_RESOURCES.TAGS(tagName, REGISTRY_REPOSITORIES_RESOURCES.REGISTRY_REPOSITORIES(repositoryId, context))}`
};
