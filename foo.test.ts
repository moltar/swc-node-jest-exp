describe('foo', () => {
  it('should import', async () => {
    expect.assertions(1);

    const { FOO } = await import('./foo')

    expect(FOO).toBe(true)
  })
})