import Character from '../../src/js/Character/Character';

it('Создается персонаж с классом Character и заданным именем', () => {
  const character = new Character('Luntic');

  expect(character).toEqual({
    name: 'Luntic',
    level: 1,
    health: 100,
  });
});

it('Создается персонаж с классом Character c именем по умолчанию', () => {
  const character = new Character();

  expect(character).toEqual({
    name: 'Just a pawn',
    level: 1,
    health: 100,
  });
});
