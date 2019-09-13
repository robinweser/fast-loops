import objectRenameKeys from '../objectRenameKeys'

describe('objectRenameKeys', () => {
  it('should reduce an object', () => {
    expect(
      objectRenameKeys(
        { foo: 1, bar: 2, baz: 3 },
        {
          baz: 'foobar',
        }
      )
    ).toEqual({
      foo: 1,
      bar: 2,
      foobar: 3,
    })
  })
})
