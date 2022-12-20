import Roles from './roles';
import Plans from './plans';
import Storage from './storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      clienteImport: {
        id: 'clienteImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      clienteCreate: {
        id: 'clienteCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      clienteEdit: {
        id: 'clienteEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      clienteDestroy: {
        id: 'clienteDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      clienteRead: {
        id: 'clienteRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      clienteAutocomplete: {
        id: 'clienteAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      paisImport: {
        id: 'paisImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      paisCreate: {
        id: 'paisCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      paisEdit: {
        id: 'paisEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      paisDestroy: {
        id: 'paisDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      paisRead: {
        id: 'paisRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      paisAutocomplete: {
        id: 'paisAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      corretoraImport: {
        id: 'corretoraImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      corretoraCreate: {
        id: 'corretoraCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      corretoraEdit: {
        id: 'corretoraEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      corretoraDestroy: {
        id: 'corretoraDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      corretoraRead: {
        id: 'corretoraRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      corretoraAutocomplete: {
        id: 'corretoraAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      contaImport: {
        id: 'contaImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      contaCreate: {
        id: 'contaCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      contaEdit: {
        id: 'contaEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      contaDestroy: {
        id: 'contaDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      contaRead: {
        id: 'contaRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      contaAutocomplete: {
        id: 'contaAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      planoImport: {
        id: 'planoImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      planoCreate: {
        id: 'planoCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      planoEdit: {
        id: 'planoEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      planoDestroy: {
        id: 'planoDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      planoRead: {
        id: 'planoRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      planoAutocomplete: {
        id: 'planoAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      ordemImport: {
        id: 'ordemImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      ordemCreate: {
        id: 'ordemCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      ordemEdit: {
        id: 'ordemEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      ordemDestroy: {
        id: 'ordemDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      ordemRead: {
        id: 'ordemRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      ordemAutocomplete: {
        id: 'ordemAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      roboImport: {
        id: 'roboImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      roboCreate: {
        id: 'roboCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      roboEdit: {
        id: 'roboEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      roboDestroy: {
        id: 'roboDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      roboRead: {
        id: 'roboRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      roboAutocomplete: {
        id: 'roboAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      pedidoImport: {
        id: 'pedidoImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      pedidoCreate: {
        id: 'pedidoCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      pedidoEdit: {
        id: 'pedidoEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      pedidoDestroy: {
        id: 'pedidoDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      pedidoRead: {
        id: 'pedidoRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      pedidoAutocomplete: {
        id: 'pedidoAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      registroDiarioImport: {
        id: 'registroDiarioImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      registroDiarioCreate: {
        id: 'registroDiarioCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      registroDiarioEdit: {
        id: 'registroDiarioEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      registroDiarioDestroy: {
        id: 'registroDiarioDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      registroDiarioRead: {
        id: 'registroDiarioRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      registroDiarioAutocomplete: {
        id: 'registroDiarioAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      checkListImport: {
        id: 'checkListImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      checkListCreate: {
        id: 'checkListCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      checkListEdit: {
        id: 'checkListEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      checkListDestroy: {
        id: 'checkListDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      checkListRead: {
        id: 'checkListRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      checkListAutocomplete: {
        id: 'checkListAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      planoPeriodoImport: {
        id: 'planoPeriodoImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      planoPeriodoCreate: {
        id: 'planoPeriodoCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.planoPeriodoQrCode,
        ],
      },
      planoPeriodoEdit: {
        id: 'planoPeriodoEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.planoPeriodoQrCode,
        ],
      },
      planoPeriodoDestroy: {
        id: 'planoPeriodoDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.planoPeriodoQrCode,
        ],
      },
      planoPeriodoRead: {
        id: 'planoPeriodoRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      planoPeriodoAutocomplete: {
        id: 'planoPeriodoAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      parametrosRoboImport: {
        id: 'parametrosRoboImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      parametrosRoboCreate: {
        id: 'parametrosRoboCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      parametrosRoboEdit: {
        id: 'parametrosRoboEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      parametrosRoboDestroy: {
        id: 'parametrosRoboDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      parametrosRoboRead: {
        id: 'parametrosRoboRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      parametrosRoboAutocomplete: {
        id: 'parametrosRoboAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },    
      parametrosRoboConfiguracao: {
        id: 'parametrosRoboConfiguracao',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },         
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
