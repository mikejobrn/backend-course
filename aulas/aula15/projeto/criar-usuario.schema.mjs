const CriarUsuarioSchema = {
  nome: {
    notEmpty: {
      errorMessage: "Campo de nome não pode ser vazio",
    },
  },
  login: {
    notEmpty: {
      errorMessage: "Campo de login não pode ser vazio",
    },
  },
  senha: {
    notEmpty: {
      errorMessage: "Campo de senha não pode ser vazio",
    },
    isLength: {
      options: {
        min: 8,
        max: 32,
      },
      errorMessage: "Senha tem que ter entre 8 e 32 caracteres",
    },
  },
};

export { CriarUsuarioSchema }; 