import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/registroDiario/importer/registroDiarioImporterSelectors';
import RegistroDiarioService from 'src/modules/registroDiario/registroDiarioService';
import fields from 'src/modules/registroDiario/importer/registroDiarioImporterFields';
import { i18n } from 'src/i18n';

const registroDiarioImporterActions = importerActions(
  'REGISTRODIARIO_IMPORTER',
  selectors,
  RegistroDiarioService.import,
  fields,
  i18n('entities.registroDiario.importer.fileName'),
);

export default registroDiarioImporterActions;