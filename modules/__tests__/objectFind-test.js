import objectFind from '../objectFind'

describe('objectFind', () => {
  it('should return the first key that matches the query', () => {
    expect(
      objectFind({ 1: 10, 2: 20, 3: 30, 4: 40 }, value => value > 20)
    ).toEqual('3')
  })

  it('should return undefined if no matching pair is found', () => {
    expect(
      objectFind({ 1: 10, 2: 20, 3: 30, 4: 40 }, value => value > 50)
    ).toEqual(undefined)
  })

  it('should pass value, key, object to the query', () => {
    expect(
      objectFind(
        { 1: 10, 2: 20, 3: 30, 4: 40 },
        (value, key, obj) => value === 30 && key === '3' && obj[key] === value
      )
    ).toEqual('3')
  })
})
