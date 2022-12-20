import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('corretora');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const CorretoraSchema = new Schema(
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

  CorretoraSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  CorretoraSchema.index(
    { nome: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        nome: { $type: 'string' },
      },
    },
  );  

  CorretoraSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  CorretoraSchema.set('toJSON', {
    getters: true,
  });

  CorretoraSchema.set('toObject', {
    getters: true,
  });

  return database.model('corretora', CorretoraSchema);
};
