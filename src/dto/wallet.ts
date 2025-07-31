import { ObjectId } from "mongodb";

export type WalletResponse = {
    address: string
    private_key: string
    mnemonic: string[] | undefined
    amount_words: number
}

export interface WalletModal {
    _id?: ObjectId
    email: string
    wallet: WalletResponse
    ct: Date
    Ut?: Date | null
}
