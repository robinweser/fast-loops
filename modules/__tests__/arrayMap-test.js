import arrayMap from '../arrayMap'

describe('arrayMap', () => {
  it('should map an array', () => {
    expect(arrayMap([1, 2, 3], val => val * val)).toEqual([1, 4, 9])
  })
})
