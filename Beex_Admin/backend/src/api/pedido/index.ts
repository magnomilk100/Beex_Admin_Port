export default (app) => {
  app.post(
    `/tenant/:tenantId/pedido`,
    require('./pedidoCreate').default,
  );
  app.put(
    `/tenant/:tenantId/pedido/:id`,
    require('./pedidoUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/pedido/import`,
    require('./pedidoImport').default,
  );
  app.delete(
    `/tenant/:tenantId/pedido`,
    require('./pedidoDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/pedido/autocomplete`,
    require('./pedidoAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/pedido`,
    require('./pedidoList').default,
  );
  app.get(
    `/tenant/:tenantId/pedido/:id`,
    require('./pedidoFind').default,
  );


  /** Below Created by Magno */
  app.get(
    `/tenant/:tenantId/pedido/conta/idMetatraderCorretora/:idMetatraderCorretora`,
    require('./pedidoFindByIdMetatraderCorretora').default,
  );
  
  app.get(
    `/tenant/:tenantId/pedido/conta/idMetatraderCorretora/:idMetatraderCorretora/robo/:roboId`,
    require('./pedidoFindByIdMetatraderCorretoraAndRoboId').default,
  );  
  /** Above Created by Magno */  
};
