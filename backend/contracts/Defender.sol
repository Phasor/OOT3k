// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/*
    This contract is the NFT contract for the Defender series of Nautical Narwhals Game Studios. 
    Its is intended to be a collection of 222 nfts that each have the same picture.
    The contract is restricted to minting token id 0 only for this reason.
*/

/*
________             _____                     .___                
\______ \    ____  _/ ____\  ____    ____    __| _/  ____  _______ 
 |    |  \ _/ __ \ \   __\ _/ __ \  /    \  / __ | _/ __ \ \_  __ \
 |    `   \\  ___/  |  |   \  ___/ |   |  \/ /_/ | \  ___/  |  | \/
/_______  / \___  > |__|    \___  >|___|  /\____ |  \___  > |__|   
        \/      \/              \/      \/      \/      \/         
*/

/// @custom:security-contact @Phas0r on Twitter
contract Defender is ERC1155, Ownable, Pausable, ERC1155Burnable, ERC1155Supply, ReentrancyGuard {

    // set max supply of token 0 to 222 nfts
    uint256 public maxSupply = 222;
    
    constructor()
        ERC1155("ipfs://QmbFJhXoWQEGhv6nufAc93R5T57G9Rj3fsf8ARfLZQumAn/metadata.json")
    {}

    event Log(string func, address sender, uint value, bytes data);

    // contract will receive either from marketplace commission, so needs a fallback defined
    fallback() external payable {
        emit Log("fallback", msg.sender, msg.value, msg.data);
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {
        emit Log("receive", msg.sender, msg.value, "");
    }

    // Function to transfer Ether from this contract to address from input
    // Uses OpenZeppelin re-entrancy guar
    function transfer(address payable _to, uint _amount) public onlyOwner nonReentrant {
        require(_amount <= address(this).balance,"withdrawal exceeds contract balance");
        
        // Note that "to" is declared as payable
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Failed to send Ether");
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    // modidified to send to the msg.sender
    function mint(uint256 amount)
        public
    {
        // check if the max supply has been met
        require(totalSupply(0) + amount <= maxSupply, "max supply reached");

        // ensure they only mint token 0
        _mint(msg.sender, 0, amount, "");
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        whenNotPaused
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
