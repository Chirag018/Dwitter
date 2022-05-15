const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dwitter", function () {
  it("Test dwitter sign up flow", async function () {
    const Dwitter = await ethers.getContractFactory("Dwitter");
    const [user1, user2] = await ethers.getSigners();
    const dwitter = await Dwitter.deploy();
    await dwitter.deployed();

    await dwitter.signup("chirag", "Chirag", "Some bio", "someUrl");
    console.log("signin up user for chirag....")

    const user = await dwitter.users("chirag");
    expect(user.name).to.equal("Chirag");
    expect(user.bio).to.equal("Some bio");
    expect(user.avatar).to.equal("someUrl");
    console.log("test signup is successful");

    const userFromAddress = await dwitter.getUser(user1.address);
    expect(userFromAddress.username).to.equal("chirag");
    expect(userFromAddress.name).to.equal("Chirag");
    expect(userFromAddress.bio).to.equal("Some bio");
    expect(userFromAddress.avatar).to.equal("someUrl");
    console.log("test signup is successful");


    expect(await dwitter.usernames(user1.address)).to.equal("chirag");

    await expect(dwitter.signup("", "", "", "")).to.be.revertedWith(
      "User already exists!"
    );
    console.log("test user already exists error");

    await expect(
      dwitter.connect(user2).signup("chirag", "Chirag", "Some other bio", "someAvatar")
    ).to.be.revertedWith("Username is taken, please try another one.");
    console.log("test username is taken error");

    await dwitter.postDweet("Hello World");
    expect((await dwitter.dweets(0)).content).to.equal("Hello World");
    console.log("test post dweet is successful");

    const dweets = await dwitter.getDweets();
    expect((await dweets[0]).content).to.equal("Hello World");
    console.log("test get dweets is successful");

  });
});
