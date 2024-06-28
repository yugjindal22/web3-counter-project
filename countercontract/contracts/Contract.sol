// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MyContract {
    uint256 public count = 0;

    function increment() public {
        count++;
    }

    function decrement() public {
        require(count > 0, "Count cannot be less than 0");
        count--;
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}
