import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'nome',
    label: i18n('entities.plano.fields.nome'),
    schema: schemas.string(
      i18n('entities.plano.fields.nome'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'qtdDeContratos',
    label: i18n('entities.plano.fields.qtdDeContratos'),
    schema: schemas.integer(
      i18n('entities.plano.fields.qtdDeContratos'),
      {
        "required": true
      },
    ),
  },
];