const models = [
  require('./tenant').default,
  require('./auditLog').default,  
  require('./settings').default,
  require('./user').default,
  require('./cliente').default,
  require('./pais').default,
  require('./corretora').default,
  require('./conta').default,
  require('./plano').default,
  require('./ordem').default,
  require('./robo').default,
  require('./pedido').default,
  require('./registroDiario').default,
  require('./checkList').default,
  require('./planoPeriodo').default,
  require('./parametrosRobo').default,  
];

export default function init(database) {
  for (let model of models) {
    model(database);
  }

  return database;
}

export async function createCollections(database) {
  for (let model of models) {
    await model(database).createCollection();
  }

  return database;
}
