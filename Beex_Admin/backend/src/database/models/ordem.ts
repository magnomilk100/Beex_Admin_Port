import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('ordem');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const OrdemSchema = new Schema(
    {
      conta: {
        type: Schema.Types.ObjectId,
        ref: 'conta',
        required: true,
      },
      tipo: {
        type: String,
        required: true,
        enum: [
          "colocar",
          "retirar"
        ],
      },
      direcao: {
        type: String,
        required: true,
        enum: [
          "compra",
          "venda"
        ],
      },
      precoEntrada: {
        type: Number,
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
      dataHora: {
        type: Date,
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

  OrdemSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  OrdemSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  OrdemSchema.set('toJSON', {
    getters: true,
  });

  OrdemSchema.set('toObject', {
    getters: true,
  });

  return database.model('ordem', OrdemSchema);
};
