export const DB_URL = 'mongodb://nic:nic123@139.196.100.36:27017/nicchan';

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
