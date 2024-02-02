# BrikKlontong

Server uses sequelize-cli / orm

Running locally? DB reset shortcut

```bash
npx sequelize db:migrate:undo:all ^
& npx sequelize db:migrate ^
& npx sequelize db:seed:all ^
nodemon .\bin\www.js
```

Server is deployed on GCP, postgres deployed with supabase

ini sample env nya

```
JWT_SECRET=s...
IMAGEKIT_PUBLIC_KEY=public_...
IMAGEKIT_PRIVATE_KEY=private_vqUvco...
IMAGEKIT_URL_ENDPOINT=https://ik...
DATABASE_URL="postgre..."
```

# Instruction

di pull, npm i di server dir
update env nya
trus npm sequelize-cli db:migrate ke database url milik mu

tpi klo mw langsung pke, ini udh gw deploy ke neondb ku

jdi tinggal pke aj pke client, client udh di deploy di vercel
