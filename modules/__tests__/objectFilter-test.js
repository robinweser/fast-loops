import objectFilter from '../objectFilter'

describe('objectFilter', () => {
  it('should filter an object', () => {
    expect(
      objectFilter(
        { 1: 10, 2: 20, 3: 30, 4: 40 },
        (value, key) => value > 10 && parseInt(key, 10) % 2 === 0
      )
    ).toEqual({ 2: 20, 4: 40 })
  })
})
