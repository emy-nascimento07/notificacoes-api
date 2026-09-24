const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");

describe("parseId", () => {
    // Para testar o ERRO, o expect recebe uma função
    it("lança ValidationError quando o id não é um número", () => {
        expect(() => parseId("abc")).toThrow(ValidationError);
    });

    it("lança ValidationError quando o id não possui apenas números", () => {
        expect(() => parseId("12abc")).toThrow(ValidationError);
    });
})