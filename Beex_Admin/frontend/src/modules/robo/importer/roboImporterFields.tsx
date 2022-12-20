import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import roboEnumerators from 'src/modules/robo/roboEnumerators';

export default [
  {
    name: 'nome',
    label: i18n('entities.robo.fields.nome'),
    schema: schemas.string(
      i18n('entities.robo.fields.nome'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'ativo',
    label: i18n('entities.robo.fields.ativo'),
    schema: schemas.enumerator(
      i18n('entities.robo.fields.ativo'),
      {
        "required": true,
        "options": roboEnumerators.ativo
      },
    ),
  },
];