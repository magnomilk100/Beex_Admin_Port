import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('registroDiario');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const RegistroDiarioSchema = new Schema(
    {
      cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente',
        required: true,
      },
      robo: {
        type: Schema.Types.ObjectId,
        ref: 'robo',
        required: true,
      },
      versao: {
        type: String,
        required: true,
      },
      numeroMagico: {
        type: String,
        required: true,
      },
      qtdContratos: {
        type: Number,
        required: true,
      },
      data: {
        type: String,
        required: true,
      },
      numeroChart: {
        type: String,
        required: true,
      },
      conta: {
        type: Schema.Types.ObjectId,
        ref: 'conta',
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

  RegistroDiarioSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  RegistroDiarioSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  RegistroDiarioSchema.set('toJSON', {
    getters: true,
  });

  RegistroDiarioSchema.set('toObject', {
    getters: true,
  });

  return database.model('registroDiario', RegistroDiarioSchema);
};
