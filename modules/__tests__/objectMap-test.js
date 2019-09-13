import objectMap from '../objectMap'

describe('objectMap', () => {
  it('should map an object', () => {
    expect(
      objectMap(
        { 1: 10, 2: 20, 3: 30, 4: 40 },
        (value, key) => value + parseInt(key, 10),
        0
      )
    ).toEqual({
      1: 11,
      2: 22,
      3: 33,
      4: 44,
    })
  })
})
