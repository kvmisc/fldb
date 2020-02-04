pragma solidity ^0.4.18;

contract FlightDB {
    // machine_id -> day_1 -> coordination_1
    //                        coordination_2
    //            -> day_2 -> coordination_1
    //                        coordination_2
    mapping(uint => mapping(uint => uint[])) db;

    function createCoordination(uint mid, uint timestamp, uint coordination) public {
        db[mid][timestamp].push(coordination);
    }
    function readCoordination(uint mid, uint timestamp, uint index) public view returns (uint) {
        return db[mid][timestamp][index];
    }
    function updateCoordination(uint mid, uint timestamp, uint coordination, uint index) public {
        db[mid][timestamp][index] = coordination;
    }
    function deleteCoordination(uint mid, uint timestamp, uint index) public {
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
