import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('pais');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const PaisSchema = new Schema(
    {
      nome: {
        type: String,
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

  PaisSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  PaisSchema.index(
    { nome: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        nome: { $type: 'string' },
      },
    },
  );  

  PaisSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  PaisSchema.set('toJSON', {
    getters: true,
  });

  PaisSchema.set('toObject', {
    getters: true,
  });

  return database.model('pais', PaisSchema);
};
