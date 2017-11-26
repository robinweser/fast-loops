import arrayReduce from '../arrayReduce'

describe('arrayReduce', () => {
  it('should reduce an array', () => {
    expect(arrayReduce([1, 2, 3], (out, value) => out + value, 0)).toEqual(6)
  })
})
