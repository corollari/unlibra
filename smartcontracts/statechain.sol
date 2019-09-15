pragma solidity ^0.5.0;

contract Schelling {

    address verifier;
    mapping(address => uint) public balance;
    
    constructor() internal{
        verifier = msg.sender;
    }

    function deposit() payable external {
        // TODO: Modify it to work with DAI instead
        balance[msg.sender] += msg.value;
    }
    
    function withdraw(uint amount) external {
        // TODO: Modify it to work with DAI instead
        require(balance[msg.sender] >= amount);
        balance[msg.sender] -= amount;
        msg.sender.transfer(balance[msg.sender]);
    }
    
    function submitTransaction(uint amount, address from, address to, bytes calldata signedTx, uint txIndex, bytes32 txHash, uint8 vVerifier, bytes32 rVerifier, bytes32 sVerifier,  uint8 vUser, bytes32 rUser, bytes32 sUser) external {
        //Check signed
        require(isSigned(verifier, txHash, vVerifier, rVerifier, sVerifier));
        require(isSigned(from, txHash, vUser, rUser, sUser));
        require(keccak256(abi.encode(signedTx)) == txHash);
        
        // TODO: Check that bits in signedTx align with the info provided
        
        // Transfer
        // TODO: Implement system that only stores txns and only allows for tx confirmation after n seconds have gone without anyone providing a txs with a higher id
        require(balance[from] > amount);
        balance[from] -= amount;
        balance[to] += amount;
    }
    
    function isSigned(address _addr, bytes32 msgHash, uint8 v, bytes32 r, bytes32 s) internal returns (bool) {
        return ecrecover(msgHash, v, r, s) == _addr;
    }
}
