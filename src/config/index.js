export const DB_URL = 'mongodb://localhost:27017';

export const defaultSchemaExtend = {
  createTime: {
    type: Date,
    default: Date.now
  },
  updateTime: {
    type: Date,
    default: Date.now
  }
};

export const defaultSchemaOptions = {
  timestamps: {
    createdAt: 'createTime',
    updatedAt: 'updateTime'
  }
};

export const jwtConfig = {
  secret: 'myjwtsecret'
};
