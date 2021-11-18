# Delivery

The backend of Delivery service.
Postgresql, Nestjs, Typeorm, Graphsql

## It's just my education project.

It is just a project for education. I'm just thinking out loud in README.md.
So, please skip it if you are reading it...

Please `npm i`
if you want to check it.
then `npm run `

Please create `.env.dev` & `.env.test`

## Read for WSL2 & Postgresql for Windows

`When you use WSL2 and you clone this repo in Ubuntu home(cd ~) / and install postgresql in Windows. You have to do ....`

1. You should know your `ipv4` address then put it in DB_HOST(.env.dev) instead of localhost
   (you can know `ipv4` by typing ipconfig in cmd)
2. Go to postgreSQL folder then go to ~/data/ folder. You can check pg_hba.conf file. Open it with notepad(administor), then type `host all all 0.0.0.0/0 md5`
   below `# TYPE DATABASE USER ADDRESS METHOD`
3. Click settings -> firewall -> advanced setting -> inbound rules / add New Rule -> put Port(5432) and rule name / save it.
   `ipv4 can change anytime(I don't know what time it change.:( )`

## Read for Mac os or something

`If you use Mac OS or something, Just wrtie 'localhost' in DB_HOST(.env.dev).`

## Users Entity:

- id
- createdAt
- updatedAt
- email
- password
- role(client|owner|delivery)
- token

## Restaurant Model

- name
- category
- address
- coverImage

(hash password are made with bcrypt (npm i bcrypt / npm i @types/bcrypt --dev-only), make @BeforeInsert ,saltRounds = 10 (라운드는 10번이 가장 무난하다고 함))
(jsonwebtoken `npm i jsonwebtoken`, `npm i @types/jsonwebtoken --only-dev` then made JWTMODULE)

## Auth

HANDMADE_MODULE
JWTMODULE (Module for jsonwebtoken)

JWTMODULE is a module for Authentication. HTTP Headers give us a token first. To intercept http things, we have to make a jwt middleware.
This middleware takes header data then made token, and decode. For making a process of handling token and decoding token, we made jwt service.
Middleware finds user that has specific 'id' by using userService. UserService finds user that has the 'id' with typeorm's findOne function.
And then if we find the user in database, we're going to attach the user to request object `req['user'] = user;`

In app.module, we need to look context. The context of apollo server and the context of graphql is a property that you can use to send all informations to all resolvers.
First, the Jwt middleware was hit then we are sending `user: req['user']` to graphql context.

if you look users.resolvers, user.resolvers has a guard. The guard implements a function(with canActivate).

CORE.ENTITY.TS
It includes common fields of all entities.
It has ObjectType() because we have to create `id, createdAt and updateAt` in all entities (user.entity...etc..)

@AuthUser() => It send the information of current loggin user. `@AuthUser() authUser: User`

Mail verification are made with Mailgun.

https://github.com/act99/delivery-backend
