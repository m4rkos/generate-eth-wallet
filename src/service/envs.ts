import dotenv from 'dotenv'
import { MongoDbConnection } from '../dto/mongo_db'

dotenv.config({ path: './.env' })

export const rpcAnkrKey = process.env.RPC_ANKR_KEY;
export const emailTest  = process.env.EMAIL_TEST as string
export const defaultDb = process.env.DEFAULT_DB as string
export const db_: MongoDbConnection = {
    host: process.env.MONGO_DB_HOST,
    port: process.env.MONGO_DB_PORT,
    user: process.env.MONGO_DB_USER,
    pass: process.env.MONGO_DB_PASS,
    auth: process.env.MONGO_DB_AUTH
}