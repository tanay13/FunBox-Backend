require('dotenv').config();
import { MikroORM } from '@mikro-orm/core';
import { Post } from './entities/Post';
import { __prod__ } from './constants';

import path from 'path';
import { User } from './entities/User';

export default {
  migrations: {
    path: path.join(__dirname, './migration'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: 'velocity',
  type: 'postgresql',
  password: process.env.PASSWORD,
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
