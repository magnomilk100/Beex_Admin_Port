import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('parametrosRobo');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ParametrosRoboSchema = new Schema(
    {
      data: {
        type: Date,
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
      configuracao: {
        type: String,
        enum: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          null
        ],
      },
      observacao: {
        type: String,
      },
      parametros: {
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

  ParametrosRoboSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  ParametrosRoboSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ParametrosRoboSchema.set('toJSON', {
    getters: true,
  });

  ParametrosRoboSchema.set('toObject', {
    getters: true,
  });

  return database.model('parametrosRobo', ParametrosRoboSchema);
};
