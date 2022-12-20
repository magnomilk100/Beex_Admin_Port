import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('robo');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const RoboSchema = new Schema(
    {
      nome: {
        type: String,
        required: true,
      },
      ativo: {
        type: String,
        required: true,
        enum: [
          "dolar",
          "indice"
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

  RoboSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  RoboSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  RoboSchema.set('toJSON', {
    getters: true,
  });

  RoboSchema.set('toObject', {
    getters: true,
  });

  return database.model('robo', RoboSchema);
};
