import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

function connect() {
    return mongoose.connect(String(process.env.DB_CONNECTION),
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
     })
     .then(() => console.log('mongo connected'))
     .catch((error) => {
         console.log('error to connect to mongo')
         process.exit(1);
        });
}

export default connect;