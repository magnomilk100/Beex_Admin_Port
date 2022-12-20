import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('checkList');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const CheckListSchema = new Schema(
    {
      data: {
        type: Date,
        required: true,
      },
      cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente',
        required: true,
      },
      aceiteDeRisco: {
        type: String,
        required: true,
        enum: [
          "pendente",
          "finalizado"
        ],
      },
      emailBoasVindas: {
        type: String,
        required: true,
        enum: [
          "pendente",
          "finalizado"
        ],
      },
      clienteRoundCube: {
        type: String,
        required: true,
        enum: [
          "pendente",
          "finalizado"
        ],
      },
      suportePrimario: {
        type: String,
        required: true,
        enum: [
          "pendente",
          "finalizado"
        ],
      },
      enviadoDe: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      },
      processandoPor: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      observacao: {
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

  CheckListSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  CheckListSchema.index(
    { cliente: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        cliente: { $type: 'objectId' },
      },
    },
  );  

  CheckListSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  CheckListSchema.set('toJSON', {
    getters: true,
  });

  CheckListSchema.set('toObject', {
    getters: true,
  });

  return database.model('checkList', CheckListSchema);
};
