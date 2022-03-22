
## Documentação da API

#### Cria solicitação de um novo aluno

```http
  POST /new-student
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` |string| **Obrigatório**|
| `password` |string| **Obrigatório**|
| `login` |string | **Obrigatório**|
| `email` |string| **Obrigatório**|
| `_class` |string| **Obrigatório**|


| Status   |Descrição                                   |
| :---------- |  :------------------------------------------ |
| `201`      |  A solicitação ocorreu com suecesso |
| `400`      | Falta de cabeçalhos ou de parâmetros |


#### Registra um novo professor no banco de dados
```http
  POST /new-professor
```
| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` |string| **Obrigatório**|
| `password` |string| **Obrigatório**|
| `login` |string | **Obrigatório**|
| `email` |string| **Obrigatório**|
| `_classes` |string[]| **Obrigatório**|
| `discipline` |string| **Obrigatório**|


| Status   |Descrição                                   |
| :---------- |  :------------------------------------------ |
| `201`      |  A solicitação ocorreu com suecesso |
| `400`      | Falta de cabeçalhos ou de parâmetros ou usuário já eixstente|


#### Busca pelas classes existentes
```http
  GET /getclasses
```

| Status   |Descrição                                   |
| :---------- |  :------------------------------------------ |
| `200`      |  A solicitação ocorreu com suecesso |
| `500`      | Erro interno|

#### Encontra UM estudante pelo login / username
```http
  GET /stdlogin/:login
```

| Parâmetros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `login` |string| **Obrigatório**|



| Status   |Descrição                                   |
| :---------- |  :------------------------------------------ |
| `200`      |  Aluno encontrado com sucesso |
| `404`      | Aluno não existe ou não encontrado|

#### Encontre estudantes pelo nome
```http
  GET /stdname/:name
```

| Parâmetros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` |string| **Obrigatório**|



| Status   |Descrição                                   |
| :---------- |  :------------------------------------------ |
| `200`      |  Alunos encontrados com sucesso |
| `404`      | Alunos não existem ou não encontrado|

#### Encontre estudantes pela classe
```http
  GET /stdclass/:_class
```

| Parâmetros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `class` |string| **Obrigatório**|



| Status   |Descrição                                   |
| :---------- |  :------------------------------------------ |
| `200`      |  Alunos encontrados com sucesso |
| `404`      | Alunos não existem ou não encontrado|

#### Encontra UM professor pelo login / username
```http
  GET /pfrlogin/:login
```

| Parâmetros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `login` |string| **Obrigatório**|



| Status   |Descrição                                   |
| :---------- |  :------------------------------------------ |
| `200`      |  Professor encontrado com sucesso |
| `404`      | Professor não existe ou não encontrado|

#### Encontra professores pela disciplina
```http
  GET /prfdiscipline/:discipline
```

| Parâmetros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `discipline` |string| **Obrigatório**|



| Status   |Descrição                                   |
| :---------- |  :------------------------------------------ |
| `200`      |  Professores encontrados com sucesso |
| `404`      | Professores não existem ou não encontrado|

#### Encontra estudantes pendentes por classe
```http
  GET /stdvalidate/:_class
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `professor_id` |string| **Obrigatório**|

| Parâmetros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `class` |string| **Obrigatório**|



| Status   |Descrição                                   |
| :---------- |  :------------------------------------------ |
| `200`      |  Estudantes encontrados |
| `400`      | Erro desconhecido|
| `404`      | Estudantes não encontrados ou _id ed professor inválido|

#### Encontra estudantes pendentes por classe
```http
  PUT /validatestd
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `professor_id` |string| **Obrigatório**|

| body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `_class` |string| **Obrigatório**|
| `studentLogin` |string| **Obrigatório**|
| `validateOption` |-1, 0 ou 1| **Obrigatório**|



| Status   |Descrição                                   |
| :---------- |  :------------------------------------------ |
| `200`      |  Estudante validado com sucesso |
| `400`      | Erro específico será retornado|
| `404`      | _id de professor inválido|
