pragma solidity ^0.4.18;

contract FlightDB {
    address public manager;

    // machine_id -> day_1 -> coordination_1
    //                        coordination_2
    //            -> day_2 -> coordination_1
    //                        coordination_2
    mapping(uint => mapping(uint => uint[])) db;

    constructor() public {
        manager = msg.sender;
    }

    function createCoordination(uint mid, uint timestamp, uint coordination) public {
        require(msg.sender == manager, "not allowed");
        db[mid][timestamp].push(coordination);
    }
    function readCoordination(uint mid, uint timestamp, uint index) public view returns (uint) {
        require(msg.sender == manager, "not allowed");
        return db[mid][timestamp][index];
    }
    function updateCoordination(uint mid, uint timestamp, uint coordination, uint index) public {
        require(msg.sender == manager, "not allowed");
        db[mid][timestamp][index] = coordination;
    }
    function deleteCoordination(uint mid, uint timestamp, uint index) public {
        require(msg.sender == manager, "not allowed");
        uint[] storage list = db[mid][timestamp];
        uint length = list.length;
        if ( length > 0 ) {
            for ( uint i=index; i<length-1; ++i ) {
                list[i] = list[i+1];
            }
            delete list[length-1];
            list.length--;
        }
    }
}
