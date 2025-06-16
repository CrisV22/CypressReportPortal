describe('API /dado', () => {
  it('deve retornar a mensagem "dado"', () => {
    cy.request('http://localhost:3000/dado')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.eq({ mensagem: 'dado' });
      });
  });
});
