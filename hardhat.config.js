require("@nomicfoundation/hardhat-toolbox");
const INFURA_ID = '890d6bacdcd1477bbf0f90b8d192b924'

task("accounts", "Print the list of account", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log("****************************")
    const address = await account.getAddress()
    const balance = await account.getBalance()
    console.log("account address : " + address + " and balance : " + hre.ethers.utils.formatEther(balance))
  }
})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  // defaultNetwork: "goerli",
  networks: {
    hardhat: {}, // defualt
    goerli: {
      url: `https://goerli.infura.io/v3/890d6bacdcd1477bbf0f90b8d192b924`,
      accounts: ['6fa8a68a50710a5d025f72a8664527742b00e272e27ef928f45a972896833788']
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};