import { encodeId, safeContext } from './utils.model';

export const AWARD_EMOJI_RESOURCES = {
  AWARD_EMOJI: (awardEmojiId?: number, context?: string) =>
    `${safeContext(context)}/award_emoji${encodeId(awardEmojiId)}`
};
