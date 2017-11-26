import objectReduce from '../objectReduce'

describe('objectReduce', () => {
  it('should reduce an object', () => {
    expect(
      objectReduce(
        { 1: 10, 2: 20, 3: 30, 4: 40 },
        (out, value, key) => out + value - parseInt(key, 10),
        0
      )
    ).toEqual(90)
  })
})
