import { encodeId, safeContext } from './utils.model';

export const NOTES_RESOURCES = {
  NOTES: (noteId?: number, context?: string) =>
    `${safeContext(context)}/notes${encodeId(noteId)}`
};
