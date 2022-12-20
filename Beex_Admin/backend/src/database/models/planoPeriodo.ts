import mongoose from 'mongoose';
import FileSchema from './schemas/fileSchema';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('planoPeriodo');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const PlanoPeriodoSchema = new Schema(
    {
      plano: {
        type: Schema.Types.ObjectId,
        ref: 'plano',
        required: true,
      },
      periodicidade: {
        type: String,
        required: true,
        enum: [
          "mensal",
          "trimestral",
          "semestral",
          "anual"
        ],
      },
      qrCode: [FileSchema],
      valor: {
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

  PlanoPeriodoSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  PlanoPeriodoSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  PlanoPeriodoSchema.set('toJSON', {
    getters: true,
  });

  PlanoPeriodoSchema.set('toObject', {
    getters: true,
  });

  return database.model('planoPeriodo', PlanoPeriodoSchema);
};
