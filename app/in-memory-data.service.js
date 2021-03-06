"use strict";
class inMemoryDataService {
    createDb() {
        let contatos = [
            { id: 1, nome: 'Fulano de tal', email: 'fulano@email.com', telefone: '(00) 0000-0000' },
            { id: 2, nome: 'Ciclano', email: 'ciclano@email.com', telefone: '(00) 0000-0000' },
            { id: 3, nome: 'Escatamaquio', email: 'escatamaquio@email.com', telefone: '(00) 0000-0000' },
            { id: 4, nome: 'Seu Madruga', email: 'madruguinha@email.com', telefone: '(00) 0000-0000' },
            { id: 5, nome: 'Bob Esponja', email: 'bob@email.com', telefone: '(00) 0000-0000' },
        ];
        return { contatos };
    }
}
exports.inMemoryDataService = inMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map