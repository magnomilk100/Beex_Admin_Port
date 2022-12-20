import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'cliente',
    label: i18n('entities.conta.fields.cliente'),
    schema: schemas.relationToOne(
      i18n('entities.conta.fields.cliente'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'corretora',
    label: i18n('entities.conta.fields.corretora'),
    schema: schemas.relationToOne(
      i18n('entities.conta.fields.corretora'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'idMetatraderCorretora',
    label: i18n('entities.conta.fields.idMetatraderCorretora'),
    schema: schemas.string(
      i18n('entities.conta.fields.idMetatraderCorretora'),
      {
        "required": true
      },
    ),
  },
];