export default (app) => {
  app.post(
    `/tenant/:tenantId/robo`,
    require('./roboCreate').default,
  );
  app.put(
    `/tenant/:tenantId/robo/:id`,
    require('./roboUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/robo/import`,
    require('./roboImport').default,
  );
  app.delete(
    `/tenant/:tenantId/robo`,
    require('./roboDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/robo/autocomplete`,
    require('./roboAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/robo`,
    require('./roboList').default,
  );
  app.get(
    `/tenant/:tenantId/robo/:id`,
    require('./roboFind').default,
  );
};