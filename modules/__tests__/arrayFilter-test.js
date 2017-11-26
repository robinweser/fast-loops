import arrayFilter from '../arrayFilter'

describe('arrayFilter', () => {
  it('should filter an array', () => {
    expect(arrayFilter([1, 2, 3, 4], value => value > 2)).toEqual([3, 4])
  })
})
