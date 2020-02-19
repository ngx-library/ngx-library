export enum CommitAction {
  CREATE = 'create',
  DELETE = 'delete',
  MOVE = 'move',
  UPDATE = 'update',
  CHMOD = 'chmod',
  NOTHING = 'nothing'
}

export function getAction(oldFileContent?: string, newFileContent?: string): CommitAction {
  if (oldFileContent === undefined && newFileContent === undefined) {
    return CommitAction.NOTHING;
  } else if (oldFileContent !== undefined && newFileContent === undefined) {
    return CommitAction.DELETE;
  } else if (oldFileContent === undefined && newFileContent !== undefined) {
    return CommitAction.CREATE;
  } else if (oldFileContent !== undefined && newFileContent !== undefined) {
    return oldFileContent !== newFileContent
      ? CommitAction.UPDATE
      : CommitAction.NOTHING;
  }

  return CommitAction.NOTHING;
}
