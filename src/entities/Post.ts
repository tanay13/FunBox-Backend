import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

// @ObjectType() - To convert this class to type-graphql type (Graphql schema and database data made at the time)
@ObjectType()
@Entity()
export class Post {
  @Field(() => Int)
  @PrimaryKey()
  _id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt: Date = new Date();

  //Automatically update the property value every time entity gets updated.
  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field() // to show this field in the graphql schema
  @Property({ type: "text" })
  title!: string;
}
