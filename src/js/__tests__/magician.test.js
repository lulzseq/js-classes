import Magician from '../magician';

test.each([
  [
    'Mike',
    {
      name: 'Mike', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
    },
  ],
  [
    'Totty',
    {
      name: 'Totty', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
    },
  ],
])(
  ('New hero - "Magician", testing class Magician'),
  (params, recieved) => {
    const expected = new Magician(params);

    expect(expected).toEqual(recieved);
  },
);