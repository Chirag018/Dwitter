require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/cJ9IKPKqVrzG2ldg4jl5bZNRhbSrqqYW",
      accounts: ['<your-private-key>'],
      // ["<your-private-key>"],

    },
  },
};
