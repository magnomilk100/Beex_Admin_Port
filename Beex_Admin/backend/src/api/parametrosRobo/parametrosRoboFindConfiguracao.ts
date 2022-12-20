import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import ParametrosRoboService from '../../services/parametrosRoboService';
//import RoboService from '../../services/roboService';

export default async (req, res, next) => {
  try {
    var robo_id = req.params.robo;
    var versao = req.params.versao;
    var configuracao = req.params.configuracao;

    new PermissionChecker(req).validateHas(
      Permissions.values.parametrosRoboConfiguracao,
    );

    const payload = await new ParametrosRoboService(req).findByConfiguracao(
      robo_id, versao, configuracao
    );

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
