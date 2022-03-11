## useCases/Professor

- ### ValidateStudent
  - #### `ValidateStudentController.ts`
    - `CheckProfessorValidity: Promise<boolean>`
      recebe dois parâmetros para checar a validade do professor que está fazendo a requisição, serve como um camada extra de proteção.
      Em seguida estabelece a query dos documentos desejados (só um será usado, afinal o documento é filtrado pelo id único). Em seguida passa pelo algorítimo que determinará se o professor é valido ou não, retornando `false` para caso algum dado esteja incompleto ou simplesmente errado/inválido, e `true` caso os crachas recebidos sejam válidos e coerentes com o do banco.
  - #### `ValidateStudentRequest.ts`
  - #### `ValidateStudent.ts`

## useCases/Student
