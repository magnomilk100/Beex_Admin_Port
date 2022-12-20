import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('pedido');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const PedidoSchema = new Schema(
    {
      cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente',
        required: true,
      },
      robo: {
        type: Schema.Types.ObjectId,
        ref: 'robo',
      },
      plano: {
        type: Schema.Types.ObjectId,
        ref: 'plano',
        required: true,
      },
      indicadoPor: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      dataInicio: {
        type: String,
        required: true,
      },
      dataTermino: {
        type: String,
        required: true,
      },
      dataEmailCobranca: {
        type: String,
      },
      valorPago: {
        type: Number,
        required: true,
      },
      plataformaDePagamento: {
        type: String,
        required: true,
        enum: [
          "Kiwify",
          "PIX",
          "Transferencia",
          "Permuta",
          "Outro"
        ],
      },
      duracaoPlano: {
        type: String,
        required: true,
        enum: [
          "mensal",
          "trimestral",
          "semestral",
          "anual"
        ],
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

  PedidoSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  PedidoSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  PedidoSchema.set('toJSON', {
    getters: true,
  });

  PedidoSchema.set('toObject', {
    getters: true,
  });

  return database.model('pedido', PedidoSchema);
};
