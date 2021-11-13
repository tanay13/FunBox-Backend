import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

// @ObjectType() - To convert this class to type-graphql type (Graphql schema and database data made at the time)
@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryKey()
  _id!: number;

  @Field()
  @Property({ type: "date" })
  createdAt: Date = new Date();

  //Automatically update the property value every time entity gets updated.
  @Field()
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field() // to show this field in the graphql schema
  @Property({ type: "text", unique: true })
  username!: string;

  // Field() removed to remove from the graphql schema
  @Property({ type: "text" })
  password!: string;
}
