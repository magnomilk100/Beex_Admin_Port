import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('conta');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ContaSchema = new Schema(
    {
      cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente',
        required: true,
      },
      corretora: {
        type: Schema.Types.ObjectId,
        ref: 'corretora',
        required: true,
      },
      idMetatraderCorretora: {
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

  ContaSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  ContaSchema.index(
    { idMetatraderCorretora: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        idMetatraderCorretora: { $type: 'string' },
      },
    },
  );  

  ContaSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ContaSchema.set('toJSON', {
    getters: true,
  });

  ContaSchema.set('toObject', {
    getters: true,
  });

  return database.model('conta', ContaSchema);
};
