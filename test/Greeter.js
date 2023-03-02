const { expect, assert } = require("chai");
const { ethers } = require('hardhat')

describe("Greeter", async function () {
    it("Should return the new greeting once it's updated : ", async function () {
        const greeterContract = await ethers.getContractFactory("Greeter");
        const greeter = await greeterContract.deploy("Hello, Web2");
        await greeter.deployed();

        expect(await greeter.greet()).to.equal("Hello, Web2");

        const updateGreeting = await greeter.setGreeting("Hello, Web3");
        // wait till transaction is mined
        await updateGreeting.wait();

        expect(await greeter.greet()).to.equal("Hello, Web3");
    })
})