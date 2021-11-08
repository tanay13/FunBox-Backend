## ORM

Object-Relational Mapping (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a library that implements the Object-Relational Mapping technique, hence the phrase "an ORM".

An ORM library is a completely ordinary library written in your language of choice that encapsulates the code needed to manipulate the data, so you don't use SQL anymore; you interact directly with an object in the same language you're using.

## migrations

https://betterprogramming.pub/typeorm-migrations-explained-fdb4f27cb1b3

## Persist and Flush

https://mikro-orm.io/docs/entity-manager#persist-and-flush

em.persist(entity) is used to mark new entities for future persisting. It will make the entity managed by given EntityManager and once flush will be called, it will be written to the database.
