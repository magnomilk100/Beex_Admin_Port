import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('plano');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const PlanoSchema = new Schema(
    {
      nome: {
        type: String,
        required: true,
      },
      qtdDeContratos: {
        type: Number,
        required: true,
      },
      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
        required: true
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  PlanoSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  PlanoSchema.index(
    { nome: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        nome: { $type: 'string' },
      },
    },
  );

  PlanoSchema.index(
    { qtdDeContratos: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        qtdDeContratos: { $type: 'number' },
      },
    },
  );  

  PlanoSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  PlanoSchema.set('toJSON', {
    getters: true,
  });

  PlanoSchema.set('toObject', {
    getters: true,
  });

  return database.model('plano', PlanoSchema);
};
