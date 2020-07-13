import { ArchiveFormat } from '../archive-fromat.enum';

import { ACCESS_REQUESTS_RESOURCES } from './access-requests-resources.model';
import { AWARD_EMOJI_RESOURCES } from './award-emoji-resources.model';
import { CUSTOM_ATTRIBUTES_RESOURCES } from './custom-attributes-resources.model';
import { ISSUES_RESOURCES } from './issues-resources.model';
import { MERGE_REQUESTS_RESOURCES } from './merge-requests-resources.model';
import { NOTES_RESOURCES } from './notes-resources.model';
import { REGISTRY_REPOSITORIES_RESOURCES } from './registry-repositories-resources.model';
import { SNIPPETS_RESOURCES } from './snippets-resources.model';
import { encodeId, safeContext } from './utils.model';

export const PROJECTS_RESOURCES = {
  PROJECTS: (projectId?: number | string, context?: string) =>
    `${safeContext(context)}/projects${encodeId(projectId)}`,
  REPOSITORY: (projectId: number | string, context?: string) =>
    `${PROJECTS_RESOURCES.PROJECTS(projectId, context)}/repository`,
  BRANCHES: (projectId: number | string, branchName?: string, context?: string) =>
    `${PROJECTS_RESOURCES.REPOSITORY(projectId, context)}/branches${encodeId(branchName)}`,
  MERGED_BRANCHES: (projectId: number | string, context?: string) =>
    `${PROJECTS_RESOURCES.REPOSITORY(projectId, context)}/merged_branches`,
  REPOSITORY_TREE: (projectId: number | string, context?: string) =>
    `${PROJECTS_RESOURCES.REPOSITORY(projectId, context)}/tree`,
  REPOSITORY_BLOBS: (projectId: number | string, sha: string, context?: string) =>
    `${PROJECTS_RESOURCES.REPOSITORY(projectId, context)}/blobs/${sha}`,
  REPOSITORY_BLOBS_RAW: (projectId: number | string, sha: string, context?: string) =>
    `${PROJECTS_RESOURCES.REPOSITORY_BLOBS(projectId, sha, context)}/raw`,
  REPOSITORY_ARCHIVE: (projectId: number | string, format?: ArchiveFormat, context?: string) =>
    `${PROJECTS_RESOURCES.REPOSITORY(projectId, context)}/archive${encodeId(format, '.')}`,
  REPOSITORY_COMPARE: (projectId: number | string, context?: string) =>
    `${PROJECTS_RESOURCES.REPOSITORY(projectId, context)}/compare`,
  REPOSITORY_CONTRIBUTORS: (projectId: number | string, context?: string) =>
    `${PROJECTS_RESOURCES.REPOSITORY(projectId, context)}/contributors`,
  REPOSITORY_MERGE_BASE: (projectId: number | string, context?: string) =>
    `${PROJECTS_RESOURCES.REPOSITORY(projectId, context)}/merge_base`,
  REPOSITORY_FILES: (projectId: number | string, filePath?: string, context?: string) =>
    `${PROJECTS_RESOURCES.REPOSITORY(projectId, context)}/files${encodeId(filePath)}`,
  REPOSITORY_FILES_BLAME: (projectId: number | string, filePath: string, context?: string) =>
    `${PROJECTS_RESOURCES.REPOSITORY_FILES(projectId, filePath, context)}/blame`,
  REPOSITORY_FILES_RAW: (projectId: number | string, filePath: string, context?: string) =>
    `${PROJECTS_RESOURCES.REPOSITORY_FILES(projectId, filePath, context)}/raw`,
  COMMITS: (projectId: number | string, sha?: string, context?: string) =>
    `${PROJECTS_RESOURCES.REPOSITORY(projectId, context)}/commits${encodeId(sha)}`,
  STATUSES: (projectId: number | string, sha: string, context?: string) =>
    `${PROJECTS_RESOURCES.PROJECTS(projectId, context)}/statuses${encodeId(sha)}`,
  COMMIT_REFERENCES: (projectId: number | string, sha: string, context?: string) =>
    `${PROJECTS_RESOURCES.COMMITS(projectId, sha, context)}/refs`,
  COMMIT_CHERRY_PICK: (projectId: number | string, sha: string, context?: string) =>
    `${PROJECTS_RESOURCES.COMMITS(projectId, sha, context)}/cherry_pick`,
  COMMIT_REVERT: (projectId: number | string, sha: string, context?: string) =>
    `${PROJECTS_RESOURCES.COMMITS(projectId, sha, context)}/revert`,
  COMMIT_DIFF: (projectId: number | string, sha: string, context?: string) =>
    `${PROJECTS_RESOURCES.COMMITS(projectId, sha, context)}/diff`,
  COMMIT_COMMENTS: (projectId: number | string, sha: string, context?: string) =>
    `${PROJECTS_RESOURCES.COMMITS(projectId, sha, context)}/comments`,
  COMMIT_DISCUSSIONS: (projectId: number | string, sha: string, context?: string) =>
    `${PROJECTS_RESOURCES.COMMITS(projectId, sha, context)}/discussions`,
  COMMIT_STATUSES: (projectId: number | string, sha: string, context?: string) =>
    `${PROJECTS_RESOURCES.COMMITS(projectId, sha, context)}/statuses`,
  COMMIT_SIGNATURE: (projectId: number | string, sha: string, context?: string) =>
    `${PROJECTS_RESOURCES.COMMITS(projectId, sha, context)}/signature`,
  COMMIT_MERGE_REQUESTS: (projectId: number | string, sha: string, context?: string) =>
    `${MERGE_REQUESTS_RESOURCES.MERGE_REQUESTS(undefined, PROJECTS_RESOURCES.COMMITS(projectId, sha, context))}`,
  ACCESS_REQUESTS: (projectId: number | string, userId?: number, context?: string) =>
    `${ACCESS_REQUESTS_RESOURCES.ACCESS_REQUESTS(userId, PROJECTS_RESOURCES.PROJECTS(projectId, context))}`,
  ACCESS_REQUESTS_APPROVE: (projectId: number | string, userId: number, context?: string) =>
    `${ACCESS_REQUESTS_RESOURCES.APPROVE(userId, PROJECTS_RESOURCES.PROJECTS(projectId, context))}`,
  ISSUES_AWARD_EMOJI: (projectId: number | string, issueId: number, noteId: number, awardEmojiId?: number, context?: string) =>
    `${AWARD_EMOJI_RESOURCES.AWARD_EMOJI(awardEmojiId, NOTES_RESOURCES.NOTES(noteId, ISSUES_RESOURCES.ISSUES(issueId, PROJECTS_RESOURCES.PROJECTS(projectId, context))))}`,
  ISSUES_NOTES_AWARD_EMOJI: (projectId: number | string, issueId: number, awardEmojiId?: number, context?: string) =>
    `${AWARD_EMOJI_RESOURCES.AWARD_EMOJI(awardEmojiId, ISSUES_RESOURCES.ISSUES(issueId, PROJECTS_RESOURCES.PROJECTS(projectId, context)))}`,
  MERGE_REQUESTS_AWARD_EMOJI: (projectId: number | string, mergeRequestsId: number, awardEmojiId?: number, context?: string) =>
    `${AWARD_EMOJI_RESOURCES.AWARD_EMOJI(awardEmojiId, MERGE_REQUESTS_RESOURCES.MERGE_REQUESTS(mergeRequestsId, PROJECTS_RESOURCES.PROJECTS(projectId, context)))}`,
  SNIPPETS_AWARD_EMOJI: (projectId: number | string, snippetId: number, awardEmojiId?: number, context?: string) =>
    `${AWARD_EMOJI_RESOURCES.AWARD_EMOJI(awardEmojiId, SNIPPETS_RESOURCES.SNIPPETS(snippetId, PROJECTS_RESOURCES.PROJECTS(projectId, context)))}`,
  REGISTRY_REPOSITORIES: (projectId: number | string, repositoryId?: number, context?: string) =>
    `${REGISTRY_REPOSITORIES_RESOURCES.REGISTRY_REPOSITORIES(repositoryId, PROJECTS_RESOURCES.PROJECTS(projectId, context))}`,
  REGISTRY_REPOSITORIES_TAGS: (projectId: number | string, repositoryId: number, tagName?: string, context?: string) =>
    `${REGISTRY_REPOSITORIES_RESOURCES.TAGS(repositoryId, tagName, PROJECTS_RESOURCES.PROJECTS(projectId, context))}`,
  CUSTOM_ATTRIBUTES: (projectId: number | string, customAttributeKey?: string, context?: string) =>
    `${CUSTOM_ATTRIBUTES_RESOURCES.CUSTOM_ATTRIBUTES(customAttributeKey, PROJECTS_RESOURCES.PROJECTS(projectId, context))}`
};
