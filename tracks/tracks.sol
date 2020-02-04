pragma solidity ^0.4.18;

import "./StringUtilsLib.sol";

contract FlightDB {
    using StringUtilsLib for *;

    string[] companyList;

    function addCompany(string memory v) public returns (bool) {
        if ( v.toSlice().len() <= 0 ) { return false; }
        for ( uint i=0; i<companyList.length; ++i ) {
            if ( companyList[i].toSlice().equals(v.toSlice()) ) {
                return false;
            }
        }
        companyList.push(v);
        return true;
    }
    function getCompanys() public returns (string) {
        string memory ret = "";
        for ( uint i=0; i<companyList.length; ++i ) {
            ret = ret.toSlice().concat(",".toSlice());
            ret = ret.toSlice().concat(companyList[i].toSlice());
        }
        return ret;
    }
    function updateCompany(string memory o, string memory n) public returns (bool) {
        if ( o.toSlice().len() <= 0 ) { return false; }
        if ( n.toSlice().len() <= 0 ) { return false; }
        for ( uint i=0; i<companyList.length; ++i ) {
            if ( companyList[i].toSlice().equals(o.toSlice()) ) {
                companyList[i] = n;
                return true;
            }
        }
        return false;
    }
    function removeCompany(string memory v) public returns (bool) {
        if ( v.toSlice().len() <= 0 ) { return false; }
        if ( companyList.length <= 0 ) { return false; }
        for ( uint i=0; i<companyList.length; ++i ) {
            if ( companyList[i].toSlice().equals(v.toSlice()) ) {
                for ( uint j=i; j<companyList.length-1; ++j ) {
                    companyList[j] = companyList[j+1];
                }
                delete companyList[companyList.length-1];
                companyList.length--;
                return true;
            }
        }
        return false;
    }
    function getCompanyCount() public view returns (uint) {
        return companyList.length;
    }

function uint2str(uint i) internal pure returns (string) {
    if ( i == 0 ) { return "0"; }
    uint j = i;
    uint length;
    while ( j != 0 ) {
        length++;
        j /= 10;
    }
    bytes memory bstr = new bytes(length);
    uint k = length - 1;
    while ( i != 0 ) {
        bstr[k--] = byte(48 + i % 10);
        i /= 10;
    }
    return string(bstr);
}

}