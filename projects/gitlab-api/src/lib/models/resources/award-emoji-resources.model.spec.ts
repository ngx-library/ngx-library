import { AWARD_EMOJI_RESOURCES } from './award-emoji-resources.model';

describe('Award Emoji Resources', () => {
  describe('AWARD_EMOJI', () => {
    it('AWARD_EMOJI with context and award emoji id', () => {
      expect(AWARD_EMOJI_RESOURCES.AWARD_EMOJI(42, '/fake/context'))
        .toEqual('/fake/context/award_emoji/42');
    });

    it('AWARD_EMOJI with context', () => {
      expect(AWARD_EMOJI_RESOURCES.AWARD_EMOJI(undefined, '/fake/context'))
        .toEqual('/fake/context/award_emoji');
    });

    it('AWARD_EMOJI with award emoji id', () => {
      expect(AWARD_EMOJI_RESOURCES.AWARD_EMOJI(42))
        .toEqual('/award_emoji/42');
    });

    it('AWARD_EMOJI without context and award emoji id', () => {
      expect(AWARD_EMOJI_RESOURCES.AWARD_EMOJI())
        .toEqual('/award_emoji');
    });
  });
});
