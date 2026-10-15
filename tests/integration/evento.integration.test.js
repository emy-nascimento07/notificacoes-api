const { sequelize, Evento } = require("../../src/models");
const EventoService = require("../../src/services/EventoService");
const limparBanco = require("../helpers/limparBanco");

// Antes de CADA teste: banco vazio
beforeEach(async () => {
  await limparBanco();
});

// Depois de TODOS os testes do arquivo: fecha a conexão com o banco
afterAll(async () => {
  await sequelize.close();
});

describe("EventoService.criar (integração)", () => {
  it("grava o evento no banco com o nome correto", async () => {
    // Arrange: um evento válido (data no formato ano-mês-dia)
    const dados = { nome: "Semana de Tecnologia", data: "2026-11-20" };

    // Act: chamem o service que cria o evento (não esqueçam o await!)
    const criado = await EventoService.criar(dados);

    // Assert: busquem o evento NO BANCO usando o Model Evento
    const doBanco = await Evento.findByPk(criado.id);
    expect(doBanco).not.toBeNull();
    expect(doBanco.nome).toBe("Semana de Tecnologia");
    expect(doBanco.data).toBe("2026-11-20");
  });
});
