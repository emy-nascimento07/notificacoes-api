const { sequelize, Participante } = require("../../src/models");
const ParticipanteService = require("../../src/services/ParticipanteService");
const limparBanco = require("../helpers/limparBanco");

// Antes de CADA teste: banco vazio - esvaziar banco
beforeEach(async () => {
    await limparBanco();
});

// Depois de TODOS os testes do arquivo: fecha a conexão com o banco
afterAll(async () => {
    await sequelize.close();
});

// Criar novo participante
describe("ParticipanteService.criar (integração)", () => {
    it("grava o participante no banco com nome e e-mail corretos", async () => {
        // Arrange
        const dados = { nome: "Ana Souza", email: "ana@senai.br" };

        // Act
        const criado = await ParticipanteService.criar(dados);

        // Assert: busca de novo NO BANCO, não confia no objeto devolvido
        const doBanco = await Participante.findByPk(criado.id);
        expect(doBanco).not.toBeNull();
        expect(doBanco.nome).toBe("Ana Souza");
        expect(doBanco.email).toBe("ana@senai.br");
    });

    it("não grava participante com e-mail inválido", async () => {
    // Arrange: um participante com e-mail SEM @
    const dados = { nome: "Bruno", email: "://email.com" };

    // Act + Assert: a gravação precisa ser recusada
    await expect(ParticipanteService.criar(dados)).rejects.toThrow();

    // Assert no banco: quantos participantes devem existir agora?
    const total = await Participante.count();
    expect(total).toBe(0);
  });
});


describe("ParticipanteService.atualizar (integração)", () => {
  it("grava o nome novo no banco", async () => {
    // Arrange
    const dados = { nome: "Ana", email: "ana@senai.br" };
    const criado = await ParticipanteService.criar(dados);

    // Act - atualizar o nome para "Ana Maria"
    await ParticipanteService.atualizar(criado.id, { nome: "Ana Maria" });

    // Assert - buscar NO BANCO com o model usando o id do registro original
    const doBanco = await Participante.findByPk(criado.id);
    expect(doBanco).not.toBeNull();
    expect(doBanco.nome).toBe("Ana Maria");
  });
});
