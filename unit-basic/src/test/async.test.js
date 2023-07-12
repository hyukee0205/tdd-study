const fetchProduct = require('../async.js');

describe('async', () => {
  it('async-done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({item: 'Milk', price: 200});
      done();
    })
  })

  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({item: 'Milk', price: 200});
  })

  it('async - resolve', () => {
    return expect(fetchProduct()).resolves.toEqual({item: 'Milk', price: 200});
  })

  it('async - reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error')
  });

})
