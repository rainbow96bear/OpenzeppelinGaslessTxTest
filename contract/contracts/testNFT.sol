// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@openzeppelin/contracts/metatx/MinimalForwarder.sol";
import "hardhat/console.sol";

contract testNFT is ERC721URIStorage, ERC2771Context {
    address public minter;

    constructor(MinimalForwarder forwarder) ERC721("Test NFT", "TESTNFT") ERC2771Context(address(forwarder)) {minter = msg.sender;}

    function mint(address to, uint256 tokenId, string memory uri) external {
        // require(msg.sender == minter, "Minting is restricted");
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function _msgSender() internal view override(ERC2771Context, Context) returns (address sender) {
        return ERC2771Context._msgSender();
    }
    
    function _msgData() internal view override(ERC2771Context, Context) returns (bytes calldata) {
        return ERC2771Context._msgData();
    }

    function _transfer(address /* from */, address /* to */, uint256 /* tokenId */) internal virtual override {
        revert("Transfer is disabled");
    }
}