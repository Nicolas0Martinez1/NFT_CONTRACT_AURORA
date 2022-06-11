async function main() {
    // We get the contract to deploy
  constGreeter=await ethers.getContractFactory("NFT_CONTRACT");
    const greeter = await Greeter.deploy("NFT MINT IMPLEMENT AURORA");
  
    await greeter.deployed();
  
    console.log("your contract was deployed to:", greeter.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });