import { createAlchemyWeb3 } from "@alch/alchemy-web3";

const web3 = createAlchemyWeb3("https://eth-mainnet.alchemyapi.io/v2/demo");
web3.eth
  .getBlockNumber()
  .then((blockNumber) => console.log("Block number: " + blockNumber));
