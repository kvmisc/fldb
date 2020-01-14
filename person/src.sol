pragma solidity ^0.5.10;

contract Person {
    string public name;

    constructor(string memory value) public {
        name = value;
    }

    function updateName(string memory value) public {
        name = value;
    }
}
