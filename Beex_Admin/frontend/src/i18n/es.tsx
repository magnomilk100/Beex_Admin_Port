const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    start: 'Comienzo',
    end: 'Final',
    select: 'Seleccione',
    continue: 'Continúa',
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
        name: 'cliente',
        label: 'Clientes',
        menu: 'Clientes',
        exporterFileName: 'exportacion_cliente',
        list: {
          menu: 'Clientes',
          title: 'Clientes',
        },
        create: {
          success: 'Cliente guardado con éxito',
        },
        update: {
          success: 'Cliente guardado con éxito',
        },
        destroy: {
          success: 'Cliente eliminado con éxito',
        },
        destroyAll: {
          success: 'Cliente(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Cliente',
        },
        view: {
          title: 'Ver Cliente',
        },
        importer: {
          title: 'Importar Clientes',
          fileName: 'cliente_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    pais: {
        name: 'pais',
        label: 'Pais',
        menu: 'Pais',
        exporterFileName: 'exportacion_pais',
        list: {
          menu: 'Pais',
          title: 'Pais',
        },
        create: {
          success: 'Pais guardado con éxito',
        },
        update: {
          success: 'Pais guardado con éxito',
        },
        destroy: {
          success: 'Pais eliminado con éxito',
        },
        destroyAll: {
          success: 'Pais(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Pais',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Pais',
        },
        view: {
          title: 'Ver Pais',
        },
        importer: {
          title: 'Importar Pais',
          fileName: 'pais_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    corretora: {
        name: 'corretora',
        label: 'Corretoras',
        menu: 'Corretoras',
        exporterFileName: 'exportacion_corretora',
        list: {
          menu: 'Corretoras',
          title: 'Corretoras',
        },
        create: {
          success: 'Corretora guardado con éxito',
        },
        update: {
          success: 'Corretora guardado con éxito',
        },
        destroy: {
          success: 'Corretora eliminado con éxito',
        },
        destroyAll: {
          success: 'Corretora(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Corretora',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Corretora',
        },
        view: {
          title: 'Ver Corretora',
        },
        importer: {
          title: 'Importar Corretoras',
          fileName: 'corretora_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    conta: {
        name: 'conta',
        label: 'Contas',
        menu: 'Contas',
        exporterFileName: 'exportacion_conta',
        list: {
          menu: 'Contas',
          title: 'Contas',
        },
        create: {
          success: 'Conta guardado con éxito',
        },
        update: {
          success: 'Conta guardado con éxito',
        },
        destroy: {
          success: 'Conta eliminado con éxito',
        },
        destroyAll: {
          success: 'Conta(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Conta',
        },
        fields: {
          id: 'Id',
          'cliente': 'Cliente',
          'corretora': 'Corretora',
          'idMetatraderCorretora': 'IdMetatraderCorretora',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'idMetatraderCorretora': 'Numero que aparece no metatrader do cliente, numero fornecido pela corretora para o cliente.',
        },
        new: {
          title: 'Nuevo Conta',
        },
        view: {
          title: 'Ver Conta',
        },
        importer: {
          title: 'Importar Contas',
          fileName: 'conta_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    plano: {
        name: 'plano',
        label: 'Planos',
        menu: 'Planos',
        exporterFileName: 'exportacion_plano',
        list: {
          menu: 'Planos',
          title: 'Planos',
        },
        create: {
          success: 'Plano guardado con éxito',
        },
        update: {
          success: 'Plano guardado con éxito',
        },
        destroy: {
          success: 'Plano eliminado con éxito',
        },
        destroyAll: {
          success: 'Plano(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Plano',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          'qtdDeContratosRange': 'QtdDeContratos',
          'qtdDeContratos': 'QtdDeContratos',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Plano',
        },
        view: {
          title: 'Ver Plano',
        },
        importer: {
          title: 'Importar Planos',
          fileName: 'plano_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    ordem: {
        name: 'ordem',
        label: 'Ordens',
        menu: 'Ordens',
        exporterFileName: 'exportacion_ordem',
        list: {
          menu: 'Ordens',
          title: 'Ordens',
        },
        create: {
          success: 'Ordem guardado con éxito',
        },
        update: {
          success: 'Ordem guardado con éxito',
        },
        destroy: {
          success: 'Ordem eliminado con éxito',
        },
        destroyAll: {
          success: 'Ordem(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Ordem',
        },
        view: {
          title: 'Ver Ordem',
        },
        importer: {
          title: 'Importar Ordens',
          fileName: 'ordem_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    robo: {
        name: 'robo',
        label: 'Robos',
        menu: 'Robos',
        exporterFileName: 'exportacion_robo',
        list: {
          menu: 'Robos',
          title: 'Robos',
        },
        create: {
          success: 'Robô guardado con éxito',
        },
        update: {
          success: 'Robô guardado con éxito',
        },
        destroy: {
          success: 'Robô eliminado con éxito',
        },
        destroyAll: {
          success: 'Robô(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Robô',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          'ativo': 'Ativo',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Robô',
        },
        view: {
          title: 'Ver Robô',
        },
        importer: {
          title: 'Importar Robos',
          fileName: 'robo_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    pedido: {
        name: 'pedido',
        label: 'Pedidos',
        menu: 'Pedidos',
        exporterFileName: 'exportacion_pedido',
        list: {
          menu: 'Pedidos',
          title: 'Pedidos',
        },
        create: {
          success: 'Pedido guardado con éxito',
        },
        update: {
          success: 'Pedido guardado con éxito',
        },
        destroy: {
          success: 'Pedido eliminado con éxito',
        },
        destroyAll: {
          success: 'Pedido(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Pedido',
        },
        view: {
          title: 'Ver Pedido',
        },
        importer: {
          title: 'Importar Pedidos',
          fileName: 'pedido_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    registroDiario: {
        name: 'registroDiario',
        label: 'RegistroDiarios',
        menu: 'RegistroDiarios',
        exporterFileName: 'exportacion_registroDiario',
        list: {
          menu: 'RegistroDiarios',
          title: 'RegistroDiarios',
        },
        create: {
          success: 'Registro Diário guardado con éxito',
        },
        update: {
          success: 'Registro Diário guardado con éxito',
        },
        destroy: {
          success: 'Registro Diário eliminado con éxito',
        },
        destroyAll: {
          success: 'Registro Diário(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Registro Diário',
        },
        view: {
          title: 'Ver Registro Diário',
        },
        importer: {
          title: 'Importar RegistroDiarios',
          fileName: 'registroDiario_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    checkList: {
        name: 'checkList',
        label: 'CheckLists',
        menu: 'CheckLists',
        exporterFileName: 'exportacion_checkList',
        list: {
          menu: 'CheckLists',
          title: 'CheckLists',
        },
        create: {
          success: 'Check List guardado con éxito',
        },
        update: {
          success: 'Check List guardado con éxito',
        },
        destroy: {
          success: 'Check List eliminado con éxito',
        },
        destroyAll: {
          success: 'Check List(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Check List',
        },
        view: {
          title: 'Ver Check List',
        },
        importer: {
          title: 'Importar CheckLists',
          fileName: 'checkList_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    planoPeriodo: {
        name: 'planoPeriodo',
        label: 'PlanoPeriodos',
        menu: 'PlanoPeriodos',
        exporterFileName: 'exportacion_planoPeriodo',
        list: {
          menu: 'PlanoPeriodos',
          title: 'PlanoPeriodos',
        },
        create: {
          success: 'Plano Periodo guardado con éxito',
        },
        update: {
          success: 'Plano Periodo guardado con éxito',
        },
        destroy: {
          success: 'Plano Periodo eliminado con éxito',
        },
        destroyAll: {
          success: 'Plano Periodo(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Plano Periodo',
        },
        view: {
          title: 'Ver Plano Periodo',
        },
        importer: {
          title: 'Importar PlanoPeriodos',
          fileName: 'planoPeriodo_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    parametrosRobo: {
        name: 'parametrosRobo',
        label: 'ParametrosRobos',
        menu: 'ParametrosRobos',
        exporterFileName: 'exportacion_parametrosRobo',
        list: {
          menu: 'ParametrosRobos',
          title: 'ParametrosRobos',
        },
        create: {
          success: 'Parametros Robo guardado con éxito',
        },
        update: {
          success: 'Parametros Robo guardado con éxito',
        },
        destroy: {
          success: 'Parametros Robo eliminado con éxito',
        },
        destroyAll: {
          success: 'Parametros Robo(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Parametros Robo',
        },
        view: {
          title: 'Ver Parametros Robo',
        },
        importer: {
          title: 'Importar ParametrosRobos',
          fileName: 'parametrosRobo_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      primary: 'Color primario',
      secondary: 'Color secundario',
      logos: 'Logo',
      backgroundImages: 'Imágenes de fondo',
      shade: 'Sombra',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },
  
  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },

  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} es obligatorio`
          : `'El campo ${path} debe tener al menos ${min} elementos`,
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
    noOptions: 'Datos no encontrados',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
  table: {
    noData: 'No se encontraron registros',
    loading: 'Cargando...',
  },
  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default es;
