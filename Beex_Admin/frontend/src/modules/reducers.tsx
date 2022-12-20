import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import cliente from 'src/modules/cliente/clienteReducers';
import pais from 'src/modules/pais/paisReducers';
import corretora from 'src/modules/corretora/corretoraReducers';
import conta from 'src/modules/conta/contaReducers';
import plano from 'src/modules/plano/planoReducers';
import ordem from 'src/modules/ordem/ordemReducers';
import robo from 'src/modules/robo/roboReducers';
import pedido from 'src/modules/pedido/pedidoReducers';
import registroDiario from 'src/modules/registroDiario/registroDiarioReducers';
import checkList from 'src/modules/checkList/checkListReducers';
import planoPeriodo from 'src/modules/planoPeriodo/planoPeriodoReducers';
import parametrosRobo from 'src/modules/parametrosRobo/parametrosRoboReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    cliente,
    pais,
    corretora,
    conta,
    plano,
    ordem,
    robo,
    pedido,
    registroDiario,
    checkList,
    planoPeriodo,
    parametrosRobo,
  });
