import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'nome',
    label: i18n('entities.pais.fields.nome'),
    schema: schemas.string(
      i18n('entities.pais.fields.nome'),
      {
        "required": true
      },
    ),
  },
];