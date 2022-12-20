import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import RegistroDiarioService from '../../services/registroDiarioService';
import PedidoService from '../../services/pedidoService';
import RoboService from '../../services/roboService';
import ContaService from '../../services/contaService';
import contaAutocomplete from '../conta/contaAutocomplete';

export default async (req, res, next) => {
  try {
    var data = req.body.data;

    var cliente_id = data.cliente;
    var conta_id = data.conta;
    var robo_id = data.robo;
    //var versao = data.versao;
    var numeroMagico = data.numeroMagico;
    var volumeRoboMetatrader = parseFloat(data.qtdContratos);
    var data1 = data.data;
    var numeroChart = data.numeroChart;

    var action="";
    var sum=0;
    var auxMagicNumber="";

    var registroDiario_id=0;

    new PermissionChecker(req).validateHas(
      Permissions.values.registroDiarioRead,
    );

    const pedido = await new PedidoService(req).findByClienteId(
      cliente_id,
    );
    const plano = pedido.plano;
    const maxNumberContratos = plano.qtdDeContratos; //max numero de contratoos do plano.

    //retornado um Array
    const registroDiario = await new RegistroDiarioService(req).findByContaRoboData(
      conta_id, robo_id, data1,
    );


    //retornado um Array
    const conta = await new ContaService(req).findById(
      conta_id
    );
    var idMetatraderCorretora = conta.idMetatraderCorretora;

    const robo = await new RoboService(req).findById(
      robo_id
    );
    var nomeRobo = robo.nome;


    if(registroDiario==undefined || registroDiario==""){
      if(volumeRoboMetatrader<=maxNumberContratos){
        try {
          new PermissionChecker(req).validateHas(
            Permissions.values.registroDiarioCreate,
          );

          var payload = await new RegistroDiarioService(req).create(
            req.body.data,
          );
          //console.log("registroDiario criado = " + payload[0].id);
          //let fullMessage = new Object({message:""});
          //fullMessage.message = "testMessage";
          //fullMessage.authorize="true";

          let message = "{\"message\":\"Cliente (" + idMetatraderCorretora + ") logado com sucesso.\",\"authorize\": \"true\"}";
          console.log(message);
          await ApiResponseHandler.success(req, res, message);
          return;
        } catch (error) {
          await ApiResponseHandler.error(req, res, error);
          return;
        }        
        //console.log("manageLogin: Save 0 - MagicNumber=" + magicNumber);
        //console.log("manageLogin: idCorretoraMetatrader=" + idMetatraderCorretora + " e Magic Number = " + numeroMagico +  " logado com sucesso. Autorizado!");                                        
        //return {message:'Cliente ('+ idMetatraderCorretora +') logado com sucesso.',authorize: 'true'}; // Login - Sucesso no login

      }else{
        let message = "{\"message\":\"Quantidade de contratos (" + volumeRoboMetatrader + ") acima do contratado (" + maxNumberContratos + "). Favor entrar em contato com Beex suporte ou ajustar o numero de contratos.\",\"authorize\": \"false\"}";
        console.log(message);
        await ApiResponseHandler.success(req, res, message);
        return;
      }
    }else{
      //console.log("registroDiario criado = " + registroDiario[0].id);
      //var registroExiste=false;
	  //console.log("  registroDiario.length = " + registroDiario.length);
      for (let i = 0; i<registroDiario.length; i++) {
	  
        if(numeroMagico==registroDiario[i].numeroMagico && numeroChart!=registroDiario[i].numeroChart){
          let message = "{\"message\":\"idCorretoraMetatrader (" + idMetatraderCorretora + ") e nomeRobo (" + nomeRobo + "). Use diferente MagicNumber entre charts.\",\"authorize\": \"false\"}";
          console.log(message);
          await ApiResponseHandler.success(req, res, message);
          return;
        }else if(numeroMagico==registroDiario[i].numeroMagico && numeroChart==registroDiario[i].numeroChart && registroDiario[i].qtdContratos==volumeRoboMetatrader){
          //registroExiste=true; 
          registroDiario_id = registroDiario[i]._id;
          action="noAction";
          break;
        }else if(numeroMagico==registroDiario[i].numeroMagico && numeroChart==registroDiario[i].numeroChart && registroDiario[i].qtdContratos!=volumeRoboMetatrader){
          //registroExiste=true;
          registroDiario_id = registroDiario[i]._id;
          action="noAction";
          //break;
        }else{
            action="noAction";
            sum += registroDiario[i].qtdContratos;
        }
      }

      sum += volumeRoboMetatrader;
	  
      if(sum<=maxNumberContratos){
          for (let i = 0; i<registroDiario.length; i++) {
              if(numeroChart==registroDiario[i].numeroChart && numeroMagico!=registroDiario[i].numeroMagico){
                  auxMagicNumber = registroDiario[i].numeroMagico;
                  registroDiario_id = registroDiario[i]._id;
                  action = "update";
                  break;
              }else if(numeroChart==registroDiario[i].numeroChart && numeroMagico==registroDiario[i].numeroMagico){
                  auxMagicNumber = numeroMagico;
                  action = "update";
                  break;
              }else{
                  action = "insert";
              }
          }

          if(action=="update"){ //Robo jah existe no banco de dados, atuliazar valor se abaixo do valor total de contratos
            try {
              new PermissionChecker(req).validateHas(
                Permissions.values.registroDiarioCreate,
              );
    
              //Dando erro aqui...
              var payload = await new RegistroDiarioService(req).update(
                registroDiario_id,data
              );
              let message = "{\"message\":\"Cliente ("+ idMetatraderCorretora + ") atualizado como logado com sucesso.\",\"authorize\": \"true\"}";
              console.log(message);
              await ApiResponseHandler.success(req, res, message);
              return;
            } catch (error) {
              await ApiResponseHandler.error(req, res, error);
              return;
            }  
          }else{
            try {
              new PermissionChecker(req).validateHas(
                Permissions.values.registroDiarioCreate,
              );
    
              var payload = await new RegistroDiarioService(req).create(
                data,
              );
              let message = "{\"message\":\"Cliente (" + idMetatraderCorretora + ") logado com sucesso.\",\"authorize\": \"true\"}";
              console.log(message);
              await ApiResponseHandler.success(req, res, message);
              return;
            } catch (error) {
              await ApiResponseHandler.error(req, res, error);
              return;
            } 
          }
      }else{
          //console.log("manageLogin: DeleteMany - MagicNumber=" + magicNumber);
          try {
            if(registroDiario_id!=0){ // pois existe na base de dados
              new PermissionChecker(req).validateHas(
                Permissions.values.registroDiarioCreate,
              );
              //Original usava deleteMany, verificar se funcionarah perfeitamente com o destroyAll
              await new RegistroDiarioService(req).destroyOneId(
                registroDiario_id,
              );
            }
            let message = "{\"message\":\"Quantidade de contratos (" + sum + ") acima do contratado ("  + maxNumberContratos + "). Favor entrar em contato com Beex suporte ou ajustar o numero de contratos.\",\"authorize\": \"false\"}";
            console.log(message);
            await ApiResponseHandler.success(req, res, message);
            return;
          } catch (error) {
            await ApiResponseHandler.error(req, res, error);
          } 
      }
    }
  }catch (error) {
    await ApiResponseHandler.error(req, res, error);
    return;
  }
  return;
};
