import Bowerman from '../bowerman';

test.each([
  [
    'Nike',
    {
      name: 'Nike', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25,
    },
  ],
  [
    'Anna',
    {
      name: 'Anna', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25,
    },
  ],
])(
  ('New hero - "Bowerman", testing class Bowerman'),
  (params, recieved) => {
    const expected = new Bowerman(params);

    expect(expected).toEqual(recieved);
  },
);