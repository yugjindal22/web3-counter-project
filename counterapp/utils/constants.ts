import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
// create the client with your clientId, or secretKey if in a server environment
export const client = createThirdwebClient({ 
  clientId: CLIENT_ID as string
 });

export const chain = defineChain(11155111);

const contractAddress = "0xd7E90B4aAF8f62484a9CBbd752eA25ccC411C7F4";

const contractABI = [
    {
      "type": "function",
      "name": "count",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "decrement",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getCount",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "increment",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    }
  ] as const;
 // connect to your contract

export const CONTRACT = getContract({ 
    client: client, 
    chain: defineChain(11155111), 
    address: "0xd7E90B4aAF8f62484a9CBbd752eA25ccC411C7F4",
    abi: contractABI,
  });