require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten:{
      url:"https://eth-ropsten.alchemyapi.io/v2/FqFvkuFTCyouafBVYrKhsuDzFQj0wZOk",
      accounts:[
        // "9643cd7e54abc73c2faafa658c78b01323cfa87c7aa29eef40732270c72c74a0",
        ["<your-private-key>"],
      ],
    },
  },
};
