// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract NftContract is ERC721 {
    uint256 token_count;

    constructor() ERC721("NFT Name", "SYMBOL") {}

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return "https/ipfs URL";
    }

    function MINT_NFT(address to) public
    {
        token_count  += 1;
        _mint(to, token_count);
    }
}