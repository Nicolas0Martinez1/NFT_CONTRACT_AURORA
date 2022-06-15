async function main() {
    // We get the contract to deploy
  constNftContract=await ethers.getContractFactory("NftContract");
    const nftContract = await NftContract.deploy("");
  
    await nftContract.deployed();
  
    console.log("your contract was deployed to:", nftContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });