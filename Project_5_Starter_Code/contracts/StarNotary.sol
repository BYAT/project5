pragma solidity >=0.4.24;

//Importing openzeppelin-solidity ERC-721 implemented Standard
import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

// StarNotary Contract declaration inheritance the ERC721 openzeppelin implementation
contract StarNotary is ERC721 {
    // Star data
    struct Star {
        string name ;
        string story;
        string ra;
        string dec;
        string mag;
    }
    
    // Implement Task 1 Add a name and symbol properties
    // name: Is a short name to your token
    // symbol: Is a short string like 'USD' -> 'American Dollar'
    
    //string public constant name = "Bashayr Token";
    //string public constant symbol = "BSR";

    // mapping the Star with the Owner Address
    mapping(uint256 => Star) public lookUptokenIdToStarInfo;
    // mapping the TokenId and price
    mapping(uint256 => uint256) public starsForSale;
    mapping(bytes32 => bool) hashes;
     mapping(uint256 => Star) public tokenIdToStarInfo; 

    uint256 public counterToken;     
   /*
    * Create Star
    *
    * @param name the name of the star
    * @param story the story
    * @param ra the ra of the star
    * @param dec the dec of the star
    * @param mag the mag of the star
    */
    function createStar(string memory name, string memory story,  string memory ra, string memory dec, string memory mag) public { // Passing the name and tokenId as a parameters
        counterToken++;
        uint256 _tokenId = counterToken;
       
        //check if tokenId already exists
        require(keccak256(abi.encodePacked(lookUptokenIdToStarInfo[_tokenId].dec)) == keccak256(""));

        //check input 
        require(keccak256(abi.encodePacked(ra)) != keccak256(""));
        require(keccak256(abi.encodePacked(dec)) != keccak256(""));
        require(keccak256(abi.encodePacked(mag)) != keccak256(""));
        require(_tokenId != 0);
        require(!savedStart(ra, dec, mag));
        
        Star memory newStar = Star(name, story,   ra,  dec,  mag); // Star is an struct so we are creating a new Star
        
        
        lookUptokenIdToStarInfo[_tokenId] = newStar; // Creating in memory the Star -> tokenId mapping
        bytes32 hash = HashGeneration(ra, dec, mag);
        hashes[hash] = true;

       
        _mint(msg.sender, _tokenId); // _mint assign the the star with _tokenId to the sender address (ownership)
    }
    function savedStart(string memory ra, string memory dec, string memory mag) public view returns(bool){
     return hashes[HashGeneration(ra, dec, mag)];
    }
    function HashGeneration(string memory ra, string memory dec, string memory mag) private pure returns(bytes32) {
        return keccak256(abi.encodePacked(ra, dec, mag));
    }

    lookUptokenIdToStarInfo(uint256 _tokenId) public view returns(string memory, string memory, string memory, string memory, string memory) {
        return (lookUptokenIdToStarInfo[_tokenId].name, lookUptokenIdToStarInfo[_tokenId].story, lookUptokenIdToStarInfo[_tokenId].ra, lookUptokenIdToStarInfo[_tokenId].dec, lookUptokenIdToStarInfo[_tokenId].mag);
    }

    // Putting an Star for sale (Adding the star tokenid into the mapping starsForSale, first verify that the sender is the owner)
    function putStarUpForSale(uint256 _tokenId, uint256 _price) public {
        require(this.ownerOf(_tokenId) == msg.sender, "You can't sale the Star you don't owned");
        starsForSale[_tokenId] = _price;
    }

    
    // Function that allows you to convert an address into a payable address
    function _make_payable(address x) internal pure returns (address payable) {
        return address(uint160(x));
    }
    function buyStar(uint256 _tokenId) public  payable {
        require(starsForSale[_tokenId] > 0, "The Star should be up for sale");
        uint256 starCost = starsForSale[_tokenId];
        address ownerAddress = this.ownerOf(_tokenId);
        require(msg.value > starCost, "You need to have enough Ether");
        _transferFrom(ownerAddress, msg.sender, _tokenId); // We can't use _addTokenTo or_removeTokenFrom functions, now we have to use _transferFrom
        address payable ownerAddressPayable = _make_payable(ownerAddress); // We need to make this conversion to be able to use transfer() function to transfer ethers
        ownerAddressPayable.transfer(starCost);
        if(msg.value > starCost) {
            msg.sender.transfer(msg.value - starCost);
        }
    }

 

}