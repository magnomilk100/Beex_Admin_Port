import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('cliente');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ClienteSchema = new Schema(
    {
      nome: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      cpf: {
        type: String,
      },
      telefone: {
        type: String,
        required: true,
      },
      cidade: {
        type: String,
        required: true,
      },
      pais: {
        type: Schema.Types.ObjectId,
        ref: 'pais',
        required: true,
      },
      observacoes: {
        type: String,
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

  ClienteSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  ClienteSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ClienteSchema.set('toJSON', {
    getters: true,
  });

  ClienteSchema.set('toObject', {
    getters: true,
  });

  return database.model('cliente', ClienteSchema);
};
