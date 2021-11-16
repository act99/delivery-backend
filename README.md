# Delivery

The backend of Delivery service.
Postgresql, Nestjs, Typeorm, Graphsql

Please `npm i`
if you want to check it.
then `npm run `

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

(hash password are made with bcrypt (npm i bcrypt / npm i @types/bcrypt --dev-only), make @BeforeInsert ,saltRounds = 10 (라운드는 10번이 가장 무난하다고 함))
(jsonwebtoken `npm i jsonwebtoken`, `npm i @types/jsonwebtoken --only-dev` then made JWTMODULE)

## HANDMADE_MODULE

JWTMODULE (Module for jsonwebtoken)

https://github.com/act99/delivery-backend
