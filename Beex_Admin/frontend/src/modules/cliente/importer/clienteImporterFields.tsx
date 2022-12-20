import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'nome',
    label: i18n('entities.cliente.fields.nome'),
    schema: schemas.string(
      i18n('entities.cliente.fields.nome'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'email',
    label: i18n('entities.cliente.fields.email'),
    schema: schemas.string(
      i18n('entities.cliente.fields.email'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'cpf',
    label: i18n('entities.cliente.fields.cpf'),
    schema: schemas.string(
      i18n('entities.cliente.fields.cpf'),
      {},
    ),
  },
  {
    name: 'telefone',
    label: i18n('entities.cliente.fields.telefone'),
    schema: schemas.string(
      i18n('entities.cliente.fields.telefone'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'cidade',
    label: i18n('entities.cliente.fields.cidade'),
    schema: schemas.string(
      i18n('entities.cliente.fields.cidade'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'pais',
    label: i18n('entities.cliente.fields.pais'),
    schema: schemas.relationToOne(
      i18n('entities.cliente.fields.pais'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'observacoes',
    label: i18n('entities.cliente.fields.observacoes'),
    schema: schemas.string(
      i18n('entities.cliente.fields.observacoes'),
      {},
    ),
  },
];