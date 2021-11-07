import { MikroORM } from "@mikro-orm/core";

const main = async () => {
  const orm = await MikroORM.init({
    dbName: "liredit",
    debug: true,
    type: "postgresql",
  });
};

main();
