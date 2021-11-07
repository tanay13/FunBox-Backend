import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname + "/migrations"),
    pattern: /^[w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "funbox",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
// const assertion used so that object literals get readonly properties

// const assertion changed to exact type of the MikroOrm.init first parameter
