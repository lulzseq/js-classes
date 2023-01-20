import Swordsman from '../swordsman';

test.each([
  [
    'Jilly',
    {
      name: 'Jilly', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
    },
  ],
  [
    'Lolly',
    {
      name: 'Lolly', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
    },
  ],
])(
  ('New hero - "Swordsman", testing class Swordsman'),
  (params, recieved) => {
    const expected = new Swordsman(params);

    expect(expected).toEqual(recieved);
  },
);