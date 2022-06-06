import { ethers } from "ethers";

export const MARKETPLACE_ADDRESS = '0x634B9DBc5FF2DD6ea46E078948257Bf2936D53C8'
export const PROPERTY_NFT_ADDRESS = '0xcAc14438092Dbd1F720E3A1bDd59274b5bDE01Ec'
export const rpcProvider = new ethers.providers.JsonRpcProvider(
  process.env.NEXT_PUBLIC_RINKEBY_URL
);