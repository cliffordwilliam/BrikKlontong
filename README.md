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
