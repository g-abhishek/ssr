export PORT=3000
export NODE_ENV=development # production - change it to production when running or testing without webpack dev middlewares

# if NODE_ENV=development then 
npm run build:server
npm run dev:server

# else  
# npm run build
# npm run build:server
# npm run dev:server
