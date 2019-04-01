if (typeof web3 != 'undefined') { 
    web3 = new Web3(web3.currentProvider) // what Metamask injected 
} else {
    // Instantiate and set Ganache as your provider
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// The default (top) wallet account from a list of test accounts 
web3.eth.defaultAccount = web3.eth.accounts[0]
// The interface definition for your smart contract (the ABI) 
var StarNotary = web3.eth.contract(
    [
        {
        "constant": true,
        "inputs": [
            {
            "name": "interfaceId",
            "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
            "name": "",
            "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "name": "",
            "type": "uint256"
            }
        ],
        "name": "starsForSale",
        "outputs": [
            {
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
            "name": "",
            "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "name": "to",
            "type": "address"
            },
            {
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "name": "from",
            "type": "address"
            },
            {
            "name": "to",
            "type": "address"
            },
            {
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "name": "from",
            "type": "address"
            },
            {
            "name": "to",
            "type": "address"
            },
            {
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
            "name": "",
            "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "name": "owner",
            "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "name": "",
            "type": "bytes32"
            }
        ],
        "name": "starHashMap",
        "outputs": [
            {
            "name": "",
            "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [],
        "name": "tokenCount",
        "outputs": [
            {
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "name": "to",
            "type": "address"
            },
            {
            "name": "approved",
            "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "name": "from",
            "type": "address"
            },
            {
            "name": "to",
            "type": "address"
            },
            {
            "name": "tokenId",
            "type": "uint256"
            },
            {
            "name": "_data",
            "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "name": "owner",
            "type": "address"
            },
            {
            "name": "operator",
            "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
            "name": "",
            "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "name": "from",
            "type": "address"
            },
            {
            "indexed": true,
            "name": "to",
            "type": "address"
            },
            {
            "indexed": true,
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "name": "owner",
            "type": "address"
            },
            {
            "indexed": true,
            "name": "approved",
            "type": "address"
            },
            {
            "indexed": true,
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "name": "owner",
            "type": "address"
            },
            {
            "indexed": true,
            "name": "operator",
            "type": "address"
            },
            {
            "indexed": false,
            "name": "approved",
            "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
        },
        {
        "constant": false,
        "inputs": [
            {
            "name": "name",
            "type": "string"
            },
            {
            "name": "story",
            "type": "string"
            },
            {
            "name": "ra",
            "type": "string"
            },
            {
            "name": "dec",
            "type": "string"
            },
            {
            "name": "mag",
            "type": "string"
            }
        ],
        "name": "createStar",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "name": "tokenId",
            "type": "uint256"
            },
            {
            "name": "price",
            "type": "uint256"
            }
        ],
        "name": "putStarUpForSale",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "buyStar",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "name": "ra",
            "type": "string"
            },
            {
            "name": "dec",
            "type": "string"
            },
            {
            "name": "mag",
            "type": "string"
            }
        ],
        "name": "checkIfStarExist",
        "outputs": [
            {
            "name": "",
            "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "tokenIdToStarInfo",
        "outputs": [
            {
            "name": "",
            "type": "string"
            },
            {
            "name": "",
            "type": "string"
            },
            {
            "name": "",
            "type": "string"
            },
            {
            "name": "",
            "type": "string"
            },
            {
            "name": "",
            "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        }
    ]
)
const starNotary = StarNotary.at('0x00F0EDa987E7c8A0387e3e31CF457e1F4c47D045')

function createstar() { 
    alert('hello')
    web3.eth.getAccounts(function(error, accounts) { 
        if (error) { 
            alert(error)
            return
        }
        const account = accounts[0]
        const name = document.getElementById("name").value
        const story = document.getElementById("story").value
        const ra = document.getElementById("ra").value
        const dec = document.getElementById("dec").value
        const mag = document.getElementById("mag").value
        starNotary.createStar.sendTransaction(name, story, ra, dec, mag, {from:account}, 
            function (error, result){ 
                if (!error){
                    alert(result)
                    document.getElementById("result").value = "txHash:" + result + ", transaction pending"
                    
                    let starClaimedEvent = starNotary.Transfer()
                    starClaimedEvent.watch(function(error, result) {
                        if (!error) {
                            alert("transaction complete!")
                            document.getElementById("result").value = "transaction complete!"
                        } else {
                            alert('watching for star claimed event is failing')
                        }
                    })
                } else{
                    alert(error)
                }
            })
    })
}
function queryButtonClicked(){
    web3.eth.getAccounts(function(error, accounts){
        if (error) {
            alert(error)
            return
        }
        const account = accounts[0]
        const tokenId = document.getElementById("queryById").value
        
        starNotary.tokenIdToStarInfo.call(tokenId, function(error, result) {
            if (!error) {
                alert(result)
                document.getElementById("result").value = result
            } else {
                alert(error)
            }
        })
    })
}