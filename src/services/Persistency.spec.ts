describe('TESTANDO ALGUMA COISA', () => {
  it('descrição do teste(IT)', () => {
    const number = 1;
    expect(number).not.toBe(1);
  });
});

describe('TESTANDO ALGUMA COISA', () => {
  test('descrição do teste(TEST)', () => {
    const nome = 'Geison';
    expect(nome).not.toBe('Geison');
  });
});