## useCases/Professor

- ### ValidateStudent
  - #### `ValidateStudentController.ts`
    - `CheckProfessorValidity: Promise<boolean>`
      recebe dois parâmetros para checar a validade do professor que está fazendo a requisição, serve como um camada extra de proteção.
      Em seguida estabelece a query dos documentos desejados (só um será usado, afinal o documento é filtrado pelo id único). Realiza a query moldando os dados recebidos utilizando a interface estabelecida em `database/entities/Professor.ts`. Em seguida passa pelo algorítimo que determinará se o professor é valido ou não, retornando `false` para caso algum dado esteja incompleto ou simplesmente errado/inválido, e `true` caso os crachas recebidos sejam válidos e coerentes com o do banco.
  - #### `ValidateStudentRequest.ts`
    - `GetStudentsToValidateRequest` realiza o método de validação do professor, caso não passe é respondido um status 400 e uma mensagem de erro. Caso passar, chama um método que retorna todos os alunos a serem validados de determinada turma.
    - `ValidateStudentRequest`
  - #### `ValidateStudent.ts`

## useCases/Student
