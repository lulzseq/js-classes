import Undead from '../undead';

test.each([
  [
    'Belly',
    {
      name: 'Belly', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
    },
  ],
  [
    'Molly',
    {
      name: 'Molly', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
    },
  ],
])(
  ('New hero - "Undead", testing class Undead'),
  (params, recieved) => {
    const expected = new Undead(params);

    expect(expected).toEqual(recieved);
  },
);