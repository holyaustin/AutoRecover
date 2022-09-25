This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).


# AUTO-RECOVERY\- A Web3 Car Recovery System
![Auto Recover](https://bafkreidozomkgxj57y63pljlh7hgeqawdm5y2aiweb5jkuy4ig2m2o5mha.ipfs.nftstorage.link/)

## Introduction
Auto Recover is a multi-chain web3 project DApp with the aim recovering stolen cars across the globe with the power of web3. Users create profiles that are stored both onchain and offchain on IPFS. Users create bounties (this are amount tagged to stolen cars). Anyone with useful info about this cars can use the plafform to initiate recovery process. When car is duely recovered, bounty is paid to the founder. All files as regards to cars and bounty details are stored on IPFS. It uses the open zeppelin ERC721 standard to store file metadata ERI in an EVM-based smart contract. The smart contract is deployed on Polygon Mumbai. Polygon which is an Ethereum scaling and POS Blockchain was the best choice for deployment to reduce the cost of transactions and interaction with the blockchain.
 

## Web 3.0 technologies Used

Frontend: NextJS, postcss, tailwindcss, Theme

web3 technologies: IPFS/filecoin, Metamask wallet, Unstoppable domain, Coinbase Wallet, NFTPort, Tableland, Valist, Superfluid, Worldcoin, 

Backend: Solidity, Node.js


## Description
This project was made using several technologies. The front-end was designed using a server-side-rendering javascript tech known as NextJS. the latest version of Next was used because of how fast it was to build the project.  IPFS / Filecoin's NFT.Storage was used to store user's file on their decentralized storage. Files can be stored individually and as a folder. When Files are stored on IPFS through NFT.Storage, It is retrieved and rendered on users dashboard whenever they are logged in. They can share these files to anyone through a sharing mechansism that is easy to copy out the sharing IPFS URL.
 Fluence was also employ for P2P File Sharing through their browser ro browser Peer to peer communication technique. The whole world of Fluence was engaing as one browsed through several other case studies. Hope to implemnnbt more of fluence on future projects.

The smart contract uses ERC-721 specification to hold metadata URI, ethers.js was used to interact with the smart contract. The contract was deployed to Polygon Mumbai blockchain. The project versioning was done with Vialist. The entire project demo was deployed to Spheron. 

## Live DApp hosted on

Live Dapp on Vercel: - https://auto-recover.vercel.app/

Deployed to Polygon Mumbai: 
  export const fileShareAddress = "0x6936E43A3f9983875E32C967eB801686d51a6119"

Youtube video link: https://youtu.be/4hIymL5lCs0

https://app.valist.io/holyaustin/autorecover

## Getting Started

First, run the development server:


```
clone the repo https://github.com/holyaustin/AutoRecover.git
# next is to 
npm install
# then
npm run dev
# or
yarn dev
```

Open [http://localhost:3016](http://localhost:3016) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Connect with me and send me a mail

E-mail - holyaustin@yahoo.com

stay connected on twitter @holyaustin
