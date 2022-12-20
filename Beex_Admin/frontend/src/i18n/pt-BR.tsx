const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
  },

  app: {
    title: 'Beex Admin',
  },

  api: {
    menu: 'API',
  },

  entities: {
    cliente: {
        name: 'Cliente',
        label: 'Clientes',
        menu: 'Clientes',
        exporterFileName: 'Cliente_exportados',
        list: {
          menu: 'Clientes',
          title: 'Clientes',
        },
        create: {
          success: 'Cliente salvo com sucesso',
        },
        update: {
          success: 'Cliente salvo com sucesso',
        },
        destroy: {
          success: 'Cliente deletado com sucesso',
        },
        destroyAll: {
          success: 'Cliente(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Cliente',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          'email': 'Email',
          'cpf': 'CPF',
          'telefone': 'Telefone',
          'cidade': 'Cidade',
          'pais': 'País',
          'observacoes': 'Observações',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'nome': 'Nome completo do cliente.',
          'cpf': 'Coloque o CPF com todos os pontos e hifens como no documento. Ex: 185.659.233-98',
          'telefone': 'Celular do cliente, (+00 o qual é o código do país) e restante do número.',
          'cidade': 'Cidade onde vive o cliente atualmente.',
          'observacoes': 'Adicione qualquer informação importante do cliente.',
        },
        new: {
          title: 'Novo Cliente',
        },
        view: {
          title: 'Visualizar Cliente',
        },
        importer: {
          title: 'Importar Clientes',
          fileName: 'cliente_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    pais: {
        name: 'Pais',
        label: 'Pais',
        menu: 'Pais',
        exporterFileName: 'Pais_exportados',
        list: {
          menu: 'Pais',
          title: 'Pais',
        },
        create: {
          success: 'Pais salvo com sucesso',
        },
        update: {
          success: 'Pais salvo com sucesso',
        },
        destroy: {
          success: 'Pais deletado com sucesso',
        },
        destroyAll: {
          success: 'Pais(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Pais',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Pais',
        },
        view: {
          title: 'Visualizar Pais',
        },
        importer: {
          title: 'Importar Pais',
          fileName: 'pais_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    corretora: {
        name: 'Corretora',
        label: 'Corretoras',
        menu: 'Corretoras',
        exporterFileName: 'Corretora_exportados',
        list: {
          menu: 'Corretoras',
          title: 'Corretoras',
        },
        create: {
          success: 'Corretora salvo com sucesso',
        },
        update: {
          success: 'Corretora salvo com sucesso',
        },
        destroy: {
          success: 'Corretora deletado com sucesso',
        },
        destroyAll: {
          success: 'Corretora(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Corretora',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Corretora',
        },
        view: {
          title: 'Visualizar Corretora',
        },
        importer: {
          title: 'Importar Corretoras',
          fileName: 'corretora_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    conta: {
        name: 'Conta',
        label: 'Contas',
        menu: 'Contas',
        exporterFileName: 'Conta_exportados',
        list: {
          menu: 'Contas',
          title: 'Contas',
        },
        create: {
          success: 'Conta salvo com sucesso',
        },
        update: {
          success: 'Conta salvo com sucesso',
        },
        destroy: {
          success: 'Conta deletado com sucesso',
        },
        destroyAll: {
          success: 'Conta(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Conta',
        },
        fields: {
          id: 'Id',
          'cliente': 'Cliente',
          'corretora': 'Corretora',
          'idMetatraderCorretora': 'IdMetatraderCorretora',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'idMetatraderCorretora': 'Numero que aparece no metatrader do cliente, numero fornecido pela corretora para o cliente.',
        },
        new: {
          title: 'Novo Conta',
        },
        view: {
          title: 'Visualizar Conta',
        },
        importer: {
          title: 'Importar Contas',
          fileName: 'conta_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    plano: {
        name: 'Plano',
        label: 'Planos',
        menu: 'Planos',
        exporterFileName: 'Plano_exportados',
        list: {
          menu: 'Planos',
          title: 'Planos',
        },
        create: {
          success: 'Plano salvo com sucesso',
        },
        update: {
          success: 'Plano salvo com sucesso',
        },
        destroy: {
          success: 'Plano deletado com sucesso',
        },
        destroyAll: {
          success: 'Plano(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Plano',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          'qtdDeContratosRange': 'QtdDeContratos',
          'qtdDeContratos': 'QtdDeContratos',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Plano',
        },
        view: {
          title: 'Visualizar Plano',
        },
        importer: {
          title: 'Importar Planos',
          fileName: 'plano_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    ordem: {
        name: 'Ordem',
        label: 'Ordens',
        menu: 'Ordens',
        exporterFileName: 'Ordem_exportados',
        list: {
          menu: 'Ordens',
          title: 'Ordens',
        },
        create: {
          success: 'Ordem salvo com sucesso',
        },
        update: {
          success: 'Ordem salvo com sucesso',
        },
        destroy: {
          success: 'Ordem deletado com sucesso',
        },
        destroyAll: {
          success: 'Ordem(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Ordem',
        },
        fields: {
          id: 'Id',
          'conta': 'Conta',
          'tipo': 'Tipo',
          'direcao': 'Direcao',
          'precoEntradaRange': 'Preco de Entrada',
          'precoEntrada': 'Preco de Entrada',
          'robo': 'Robo',
          'versao': 'Versão',
          'dataHoraRange': 'Data e Hora',
          'dataHora': 'Data e Hora',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'tipo': {
            'colocar': 'Colocar',
            'retirar': 'Retirar',
          },
          'direcao': {
            'compra': 'Compra',
            'venda': 'Venda',
          },
        },
        placeholders: {

        },
        hints: {
          'tipo': 'Colocar uma ordem. Ou retirar uma ordem ou posição existente.',
          'direcao': 'Ordem de compra ou de venda.',
          'precoEntrada': 'Preço para colocar a ordem de compra ou venda.',
          'versao': 'Versão do robô. Exemplo:  2.3 ou 2.4 ou 3.0 ou 3.2',
          'dataHora': 'Data e hora para colocação da ordem. Primeiro possível horário depois desta data/hora.',
        },
        new: {
          title: 'Novo Ordem',
        },
        view: {
          title: 'Visualizar Ordem',
        },
        importer: {
          title: 'Importar Ordens',
          fileName: 'ordem_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    robo: {
        name: 'Robô',
        label: 'Robos',
        menu: 'Robos',
        exporterFileName: 'Robô_exportados',
        list: {
          menu: 'Robos',
          title: 'Robos',
        },
        create: {
          success: 'Robô salvo com sucesso',
        },
        update: {
          success: 'Robô salvo com sucesso',
        },
        destroy: {
          success: 'Robô deletado com sucesso',
        },
        destroyAll: {
          success: 'Robô(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Robô',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          'ativo': 'Ativo',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'ativo': {
            'dolar': 'Dolar',
            'indice': 'Indice',
          },
        },
        placeholders: {

        },
        hints: {
          'ativo': 'Dólar ou Índice.',
        },
        new: {
          title: 'Novo Robô',
        },
        view: {
          title: 'Visualizar Robô',
        },
        importer: {
          title: 'Importar Robos',
          fileName: 'robo_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    pedido: {
        name: 'Pedido',
        label: 'Pedidos',
        menu: 'Pedidos',
        exporterFileName: 'Pedido_exportados',
        list: {
          menu: 'Pedidos',
          title: 'Pedidos',
        },
        create: {
          success: 'Pedido salvo com sucesso',
        },
        update: {
          success: 'Pedido salvo com sucesso',
        },
        destroy: {
          success: 'Pedido deletado com sucesso',
        },
        destroyAll: {
          success: 'Pedido(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Pedido',
        },
        fields: {
          id: 'Id',
          'cliente': 'Cliente',
          'robo': 'Robo',
          'plano': 'Plano',
          'indicadoPor': 'Indicado Por',
          'dataInicioRange': 'Data de Inicio',
          'dataInicio': 'Data de Inicio',
          'dataTerminoRange': 'Data de Término',
          'dataTermino': 'Data de Término',
          'dataEmailCobrancaRange': 'Email Cobrança',
          'dataEmailCobranca': 'Email Cobrança',
          'valorPagoRange': 'Valor Pago',
          'valorPago': 'Valor Pago',
          'plataformaDePagamento': 'Plataforma De Pagamento',
          'duracaoPlano': 'Tipo de Pagamento',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'plataformaDePagamento': {
            'Kiwify': 'Kiwify',
            'PIX': 'PIX',
            'Transferencia': 'Transferencia',
            'Permuta': 'Permuta',
            'Outro': 'Outro',
          },
          'duracaoPlano': {
            'mensal': 'Mensal',
            'trimestral': 'Trimestral',
            'semestral': 'Semestral',
            'anual': 'Anual',
          },
        },
        placeholders: {

        },
        hints: {
          'robo': 'Nome do robo',
          'indicadoPor': 'Profissional Beex que indicou cliente.',
          'dataInicio': 'Ínicio do plano.',
          'dataTermino': 'Término do plano.',
          'plataformaDePagamento': 'Plataforma usada para pagamento.',
        },
        new: {
          title: 'Novo Pedido',
        },
        view: {
          title: 'Visualizar Pedido',
        },
        importer: {
          title: 'Importar Pedidos',
          fileName: 'pedido_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    registroDiario: {
        name: 'Registro Diário',
        label: 'RegistroDiarios',
        menu: 'RegistroDiarios',
        exporterFileName: 'Registro Diário_exportados',
        list: {
          menu: 'RegistroDiarios',
          title: 'RegistroDiarios',
        },
        create: {
          success: 'Registro Diário salvo com sucesso',
        },
        update: {
          success: 'Registro Diário salvo com sucesso',
        },
        destroy: {
          success: 'Registro Diário deletado com sucesso',
        },
        destroyAll: {
          success: 'Registro Diário(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Registro Diário',
        },
        fields: {
          id: 'Id',
          'cliente': 'Cliente',
          'robo': 'Robo',
          'versao': 'Versão',
          'numeroMagico': 'Numero Mágico',
          'qtdContratosRange': 'Quantidade de contratos',
          'qtdContratos': 'Quantidade de contratos',
          'dataRange': 'Data',
          'data': 'Data',
          'numeroChart': 'Numero do Gráfico',
          'conta': 'Conta',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'versao': 'Versão do robô. Exemplo:  2.3 ou 2.4 ou 3.0 ou 3.2',
          'numeroMagico': 'Magic number.',
          'numeroChart': 'Chart id',
        },
        new: {
          title: 'Novo Registro Diário',
        },
        view: {
          title: 'Visualizar Registro Diário',
        },
        importer: {
          title: 'Importar RegistroDiarios',
          fileName: 'registroDiario_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    checkList: {
        name: 'Check List',
        label: 'CheckLists',
        menu: 'CheckLists',
        exporterFileName: 'Check List_exportados',
        list: {
          menu: 'CheckLists',
          title: 'CheckLists',
        },
        create: {
          success: 'Check List salvo com sucesso',
        },
        update: {
          success: 'Check List salvo com sucesso',
        },
        destroy: {
          success: 'Check List deletado com sucesso',
        },
        destroyAll: {
          success: 'Check List(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Check List',
        },
        fields: {
          id: 'Id',
          'dataRange': 'Data',
          'data': 'Data',
          'cliente': 'Cliente',
          'aceiteDeRisco': 'Aceite de Risco Assinado',
          'emailBoasVindas': 'Email de Boas Vindas',
          'clienteRoundCube': 'Cliente em Round Cube (Email)',
          'suportePrimario': 'Suporte Primario',
          'enviadoDe': 'Enviado De',
          'processandoPor': 'Processando Por',
          'observacao': 'Observação',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'aceiteDeRisco': {
            'pendente': 'Pendente',
            'finalizado': 'Finalizado',
          },
          'emailBoasVindas': {
            'pendente': 'Pendente',
            'finalizado': 'Finalizado',
          },
          'clienteRoundCube': {
            'pendente': 'Pendente',
            'finalizado': 'Finalizado',
          },
          'suportePrimario': {
            'pendente': 'Pendente',
            'finalizado': 'Finalizado',
          },
        },
        placeholders: {

        },
        hints: {
          'suportePrimario': 'a) Auxiliar o cliente no cadastro inicial.   b) Indicar o assessor parceiro.   c) Ajudá-lo a preencher o “perfil de investidor”   d) Contratação de produtos necessários para rodar o robô. -	RLP -	Alavancagem intraday - Conta Margem - Limite facil - Plataforma MT5 Hedge - Génial Cloud   e) Instruí-lo para o depósito na corretora',
          'enviadoDe': 'Quem iniciou ou estava processando este cliente?',
          'processandoPor': 'Quem pegou este cliente para continuar o processo?',
          'observacao': 'Coloque aqui qualquer informação importante a este processo de interação com o cliente, pendencia e etc.',
        },
        new: {
          title: 'Novo Check List',
        },
        view: {
          title: 'Visualizar Check List',
        },
        importer: {
          title: 'Importar CheckLists',
          fileName: 'checkList_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    planoPeriodo: {
        name: 'Plano Periodo',
        label: 'PlanoPeriodos',
        menu: 'PlanoPeriodos',
        exporterFileName: 'Plano Periodo_exportados',
        list: {
          menu: 'PlanoPeriodos',
          title: 'PlanoPeriodos',
        },
        create: {
          success: 'Plano Periodo salvo com sucesso',
        },
        update: {
          success: 'Plano Periodo salvo com sucesso',
        },
        destroy: {
          success: 'Plano Periodo deletado com sucesso',
        },
        destroyAll: {
          success: 'Plano Periodo(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Plano Periodo',
        },
        fields: {
          id: 'Id',
          'plano': 'Plano',
          'periodicidade': 'Periodicidade',
          'qrCode': 'QR Code',
          'valorRange': 'Valor',
          'valor': 'Valor',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'periodicidade': {
            'mensal': 'Mensal',
            'trimestral': 'Trimestral',
            'semestral': 'Semestral',
            'anual': 'Anual',
          },
        },
        placeholders: {

        },
        hints: {
          'valor': 'Valor a ser pago no periodo.',
        },
        new: {
          title: 'Novo Plano Periodo',
        },
        view: {
          title: 'Visualizar Plano Periodo',
        },
        importer: {
          title: 'Importar PlanoPeriodos',
          fileName: 'planoPeriodo_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    parametrosRobo: {
        name: 'Parametros Robo',
        label: 'ParametrosRobos',
        menu: 'ParametrosRobos',
        exporterFileName: 'Parametros Robo_exportados',
        list: {
          menu: 'ParametrosRobos',
          title: 'ParametrosRobos',
        },
        create: {
          success: 'Parametros Robo salvo com sucesso',
        },
        update: {
          success: 'Parametros Robo salvo com sucesso',
        },
        destroy: {
          success: 'Parametros Robo deletado com sucesso',
        },
        destroyAll: {
          success: 'Parametros Robo(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Parametros Robo',
        },
        fields: {
          id: 'Id',
          'dataRange': 'Data',
          'data': 'Data',
          'robo': 'Robo',
          'versao': 'Versao',
          'configuracao': 'Configuracao',
          'observacao': 'Observacao',
          'parametros': 'Parametros',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'configuracao': {
            'A': 'A',
            'B': 'B',
            'C': 'C',
            'D': 'D',
            'E': 'E',
            'F': 'F',
            'G': 'G',
          },
        },
        placeholders: {

        },
        hints: {
          'data': 'Data de criação',
          'robo': 'Nome do robo',
          'versao': 'Versão do robô.',
          'configuracao': 'Set de configuração do robô.',
          'observacao': 'Coloque aqui qualquer informação importante.',
          'parametros': 'Parâmetros do robô em JSON format. Para nenhuma configuração coloque somente vazio JSOM, assim {}',
        },
        new: {
          title: 'Novo Parametros Robo',
        },
        view: {
          title: 'Visualizar Parametros Robo',
        },
        importer: {
          title: 'Importar ParametrosRobos',
          fileName: 'parametrosRobo_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },
    
  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    social: {
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      primary: 'Cor Primária',
      secondary: 'Cor Secundária',
      shade: 'Tom',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} é obrigatório`
          : `'${path} deve possuir ao menos ${min} itens`,
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default ptBR;
