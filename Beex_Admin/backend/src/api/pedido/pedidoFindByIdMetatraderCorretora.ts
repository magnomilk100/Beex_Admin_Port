import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import PedidoService from '../../services/pedidoService';

/** File Created completely by Magno */
export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.pedidoRead,
    );

    const payload = await new PedidoService(req).findByIdMetatraderCorretora(
      req.params.idMetatraderCorretora,
    );

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
