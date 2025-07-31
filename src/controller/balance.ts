import { ethers } from 'ethers';
import { WalletResponse } from '../dto/wallet';
import { rpcAnkrKey } from '../service/envs';

const provider = new ethers.JsonRpcProvider(`https://rpc.ankr.com/eth_sepolia/${rpcAnkrKey}`);
//https://rpc.ankr.com/multichain/

export async function checkBalance(wallet: WalletResponse) {
  const balance = await provider.getBalance(wallet.address);
  console.log("💰 Balance:", ethers.formatEther(balance), "ETH");
}
