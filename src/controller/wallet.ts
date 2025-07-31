import { Wallet } from 'ethers';
import { WalletResponse } from '../dto/wallet';

export function Generate() : WalletResponse
{
    const wallet = Wallet.createRandom();
    let mnemonic: string[] | undefined = wallet.mnemonic?.phrase.split(' ')
    const result: WalletResponse = {
        address: wallet.address,
        private_key: wallet.privateKey,
        mnemonic: mnemonic,
        amount_words: mnemonic?.length ?? 0
    }

    console.log('Address:', wallet.address);
    console.log('Private Key:', wallet.privateKey);
    console.log('Mnemonic:', wallet.mnemonic?.phrase);

    return result;
}