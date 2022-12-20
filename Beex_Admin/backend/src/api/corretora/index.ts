export default (app) => {
  app.post(
    `/tenant/:tenantId/corretora`,
    require('./corretoraCreate').default,
  );
  app.put(
    `/tenant/:tenantId/corretora/:id`,
    require('./corretoraUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/corretora/import`,
    require('./corretoraImport').default,
  );
  app.delete(
    `/tenant/:tenantId/corretora`,
    require('./corretoraDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/corretora/autocomplete`,
    require('./corretoraAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/corretora`,
    require('./corretoraList').default,
  );
  app.get(
    `/tenant/:tenantId/corretora/:id`,
    require('./corretoraFind').default,
  );
};
