import Zombie from '../zombie';

test.each([
  [
    'Zack',
    {
      name: 'Zack', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
    },
  ],
  [
    'Tommy',
    {
      name: 'Tommy', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
    },
  ],
])(
  ('New hero - "Zombie", testing class Zombie'),
  (params, recieved) => {
    const expected = new Zombie(params);

    expect(expected).toEqual(recieved);
  },
);