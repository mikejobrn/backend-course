const CriarUsuarioSchema = {
  nome: {
    notEmpty: {
      errorMessage: "Nome não pode ser vazio",
    },
  },
  senha: {
    notEmpty: {
      errorMessage: "Nome não pode ser vazio",
    },
    isLength: {
      options: {
        min: 8,
        max: 32,
      },
      errorMessage: "Senha deve ter entre 8 e 32 caracteres",
    },
  },
};

export { CriarUsuarioSchema };
