import { checkBalance } from "./controller/balance";
import { Generate } from "./controller/wallet";
import { connectToDatabase } from "./database/mango_db";
import { WalletModal, WalletResponse } from "./dto/wallet";
import { emailTest } from "./service/envs";

console.log("Generate ETH wallet\n");

async function main(email: string) : Promise<WalletResponse> {
    const dbClient = await connectToDatabase();
    const collection = dbClient.collection("wallets");

    console.log(`user: ${email}`);
    
    // GET
    const walletResult = await collection.findOne({ email: email });

    if (!walletResult) {
        // INSERT
        const wallet = Generate();
        const newAddress: WalletModal = { 
            email: email,
            wallet: {
                address: wallet.address,
                private_key: wallet.private_key,
                mnemonic: wallet.mnemonic,
                amount_words: wallet.amount_words,
            },
            ct: new Date(new Date().toUTCString())
        };
        const result = await collection.insertOne(newAddress);
        console.log("🎯 Inserted ID:", result.insertedId);
        return wallet;
    }

    const response: WalletResponse = {
        address: walletResult.wallet.address,
        private_key: walletResult.wallet.private_key,
        mnemonic: walletResult.wallet.mnemonic,
        amount_words: walletResult.wallet.amount_words
    }

    console.log(response.address);
    return response;
}

main(emailTest)
    .then(( wallet: WalletResponse ) => checkBalance(wallet))
    .catch((err) => console.error("Erro:", err));