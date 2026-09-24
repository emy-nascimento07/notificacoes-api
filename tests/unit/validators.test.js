// 1. Importa as funções que vamos testar
const { isEmail, minLength } = require("../../src/helpers/validators");


// 2. describe = agrupa os testes de uma função
describe("validators.isEmail", () => {

    // 3. it = um caso de teste. O texto diz o que DEVERIA acontecer
    it("não retorna erro para um e-mail válido", () => {

        // Arrange — prepara
        const email = "ana@senai.br";

        // Act — executa
        const resultado = isEmail(email);

        // Assert — confere (nos validators, null = "sem erro")
        expect(resultado).toBeNull();
    });

    it("retorna mensagem de erro para e-mail sem @", () => {
        const resultado = isEmail("ana.senai.br");
        expect(resultado).toBe("E-mail inválido");
    });
});


// 2.1. describe = não aceita string com menos de 3
describe("validators.minLength", () => {

    // 3. it = um caso de teste. O texto diz o que DEVERIA acontecer
    it("não retorna erro para uma string válida", () => {

        // Arrange — prepara
        const nome = "Ana";

        // Act — executa
        const resultado = minLength(nome, 3, "nome");

        // Assert — confere (nos validators, null = "sem erro")
        expect(resultado).toBeNull();
    });

    it("retorna mensagem de erro para string com menos de 3 letras", () => {
        const resultado = minLength("An", 3, "nome");
        expect(resultado).toBe("nome deve ter pelo menos 3 caracteres");
    });
});

// 2.2. describe = valor exato (3)
describe("validators.minLength", () => {

    it("não retorna erro para uma string com exatamente 3 letras", () => {

        const nome = "Ana";

        const resultado = minLength(nome, 3, "nome");

        expect(resultado).toBeNull();
    });
});