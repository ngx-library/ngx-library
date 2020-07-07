import { NOTES_RESOURCES } from './notes-resources.model';

describe('Notes Resources', () => {
  describe('NOTES', () => {
    it('NOTES with context and note id', () => {
      expect(NOTES_RESOURCES.NOTES(42, '/fake/context'))
        .toEqual('/fake/context/notes/42');
    });

    it('NOTES with context', () => {
      expect(NOTES_RESOURCES.NOTES(undefined, '/fake/context'))
        .toEqual('/fake/context/notes');
    });

    it('NOTES with note id', () => {
      expect(NOTES_RESOURCES.NOTES(42))
        .toEqual('/notes/42');
    });

    it('NOTES without context and note id', () => {
      expect(NOTES_RESOURCES.NOTES())
        .toEqual('/notes');
    });
  });
});
