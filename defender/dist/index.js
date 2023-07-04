'use strict';

var ethers = require('defender-relay-client/lib/ethers');
var ethers$1 = require('ethers');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var _format="hh-sol-artifact-1";var contractName="testForwarder";var sourceName="contracts/testForwarder.sol";var abi=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"InvalidShortString",type:"error"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"StringTooLong",type:"error"},{anonymous:false,inputs:[],name:"EIP712DomainChanged",type:"event"},{inputs:[],name:"eip712Domain",outputs:[{internalType:"bytes1",name:"fields",type:"bytes1"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"version",type:"string"},{internalType:"uint256",name:"chainId",type:"uint256"},{internalType:"address",name:"verifyingContract",type:"address"},{internalType:"bytes32",name:"salt",type:"bytes32"},{internalType:"uint256[]",name:"extensions",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{components:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"gas",type:"uint256"},{internalType:"uint256",name:"nonce",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],internalType:"struct testForwarder.ForwardRequest",name:"req",type:"tuple"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"execute",outputs:[{internalType:"bool",name:"",type:"bool"},{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"}],name:"getNonce",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{components:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"gas",type:"uint256"},{internalType:"uint256",name:"nonce",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],internalType:"struct testForwarder.ForwardRequest",name:"req",type:"tuple"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"verify",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}];var bytecode="0x6101606040523480156200001257600080fd5b506040518060400160405280601081526020017f4d696e696d616c466f72776172646572000000000000000000000000000000008152506040518060400160405280600581526020017f302e302e310000000000000000000000000000000000000000000000000000008152506200009a6000836200013f60201b620005d41790919060201c565b6101208181525050620000bd6001826200013f60201b620005d41790919060201c565b6101408181525050818051906020012060e08181525050808051906020012061010081815250504660a08181525050620000fc6200019c60201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250505050620007f4565b600060208351101562000165576200015d83620001f960201b60201c565b905062000196565b826200017c836200026660201b620006181760201c565b60000190816200018d9190620004ea565b5060ff60001b90505b92915050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60e051610100514630604051602001620001de95949392919062000642565b60405160208183030381529060405280519060200120905090565b600080829050601f815111156200024957826040517f305a27a90000000000000000000000000000000000000000000000000000000081526004016200024091906200072e565b60405180910390fd5b805181620002579062000784565b60001c1760001b915050919050565b6000819050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002f257607f821691505b602082108103620003085762000307620002aa565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003727fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000333565b6200037e868362000333565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003cb620003c5620003bf8462000396565b620003a0565b62000396565b9050919050565b6000819050919050565b620003e783620003aa565b620003ff620003f682620003d2565b84845462000340565b825550505050565b600090565b6200041662000407565b62000423818484620003dc565b505050565b5b818110156200044b576200043f6000826200040c565b60018101905062000429565b5050565b601f8211156200049a5762000464816200030e565b6200046f8462000323565b810160208510156200047f578190505b620004976200048e8562000323565b83018262000428565b50505b505050565b600082821c905092915050565b6000620004bf600019846008026200049f565b1980831691505092915050565b6000620004da8383620004ac565b9150826002028217905092915050565b620004f58262000270565b67ffffffffffffffff8111156200051157620005106200027b565b5b6200051d8254620002d9565b6200052a8282856200044f565b600060209050601f8311600181146200056257600084156200054d578287015190505b620005598582620004cc565b865550620005c9565b601f19841662000572866200030e565b60005b828110156200059c5784890151825560018201915060208501945060208101905062000575565b86831015620005bc5784890151620005b8601f891682620004ac565b8355505b6001600288020188555050505b505050505050565b6000819050919050565b620005e681620005d1565b82525050565b620005f78162000396565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200062a82620005fd565b9050919050565b6200063c816200061d565b82525050565b600060a082019050620006596000830188620005db565b620006686020830187620005db565b620006776040830186620005db565b620006866060830185620005ec565b62000695608083018462000631565b9695505050505050565b600082825260208201905092915050565b60005b83811015620006d0578082015181840152602081019050620006b3565b60008484015250505050565b6000601f19601f8301169050919050565b6000620006fa8262000270565b6200070681856200069f565b935062000718818560208601620006b0565b6200072381620006dc565b840191505092915050565b600060208201905081810360008301526200074a8184620006ed565b905092915050565b600081519050919050565b6000819050602082019050919050565b60006200077b8251620005d1565b80915050919050565b6000620007918262000752565b826200079d846200075d565b9050620007aa816200076d565b92506020821015620007ed57620007e87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360200360080262000333565b831692505b5050919050565b60805160a05160c05160e051610100516101205161014051611ad96200084f60003960006103630152600061032f01526000610b3401526000610b13015260006107f301526000610849015260006108720152611ad96000f3fe60806040526004361061003f5760003560e01c80632d0335ab1461004457806347153f821461008157806384b0196e146100b2578063bf5d3bdb146100e3575b600080fd5b34801561005057600080fd5b5061006b60048036038101906100669190610cce565b610120565b6040516100789190610d14565b60405180910390f35b61009b60048036038101906100969190610db8565b610169565b6040516100a9929190610edf565b60405180910390f35b3480156100be57600080fd5b506100c761031c565b6040516100da9796959493929190611085565b60405180910390f35b3480156100ef57600080fd5b5061010a60048036038101906101059190610db8565b61041e565b6040516101179190611109565b60405180910390f35b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000606061017885858561041e565b6101b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ae90611196565b60405180910390fd5b600185608001356101c891906111e5565b600260008760000160208101906101df9190610cce565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000808660200160208101906102339190610cce565b73ffffffffffffffffffffffffffffffffffffffff1687606001358860400135898060a001906102639190611228565b8b60000160208101906102769190610cce565b60405160200161028893929190611312565b6040516020818303038152906040526040516102a4919061136d565b600060405180830381858888f193505050503d80600081146102e2576040519150601f19603f3d011682016040523d82523d6000602084013e6102e7565b606091505b5091509150603f87606001356102fd91906113b3565b5a1161030c5761030b6113e4565b5b8181935093505050935093915050565b60006060806000806000606061035c60007f000000000000000000000000000000000000000000000000000000000000000061062290919063ffffffff16565b61039060017f000000000000000000000000000000000000000000000000000000000000000061062290919063ffffffff16565b46306000801b600067ffffffffffffffff8111156103b1576103b0611413565b5b6040519080825280602002602001820160405280156103df5781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b60008061052784848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506105197fdd8f4b70b0f4393e889bd39128a30628a78b61816a9eb8199759e7a349657e488860000160208101906104a09190610cce565b8960200160208101906104b39190610cce565b8a604001358b606001358c608001358d8060a001906104d29190611228565b6040516104e0929190611442565b60405180910390206040516020016104fe979695949392919061145b565b604051602081830303815290604052805190602001206106d2565b6106ec90919063ffffffff16565b90508460800135600260008760000160208101906105459190610cce565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541480156105ca575084600001602081019061059b9190610cce565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b9150509392505050565b60006020835110156105f0576105e983610713565b9050610612565b826105fa83610618565b600001908161060991906116d6565b5060ff60001b90505b92915050565b6000819050919050565b606060ff60001b831461063f576106388361077b565b90506106cc565b81805461064b906114f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610677906114f9565b80156106c45780601f10610699576101008083540402835291602001916106c4565b820191906000526020600020905b8154815290600101906020018083116106a757829003601f168201915b505050505090505b92915050565b60006106e56106df6107ef565b836108a6565b9050919050565b60008060006106fb85856108e7565b9150915061070881610938565b819250505092915050565b600080829050601f8151111561076057826040517f305a27a900000000000000000000000000000000000000000000000000000000815260040161075791906117a8565b60405180910390fd5b80518161076c906117ef565b60001c1760001b915050919050565b6060600061078883610a9e565b90506000602067ffffffffffffffff8111156107a7576107a6611413565b5b6040519080825280601f01601f1916602001820160405280156107d95781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614801561086b57507f000000000000000000000000000000000000000000000000000000000000000046145b15610898577f000000000000000000000000000000000000000000000000000000000000000090506108a3565b6108a0610aee565b90505b90565b60006040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b60008060418351036109285760008060006020860151925060408601519150606086015160001a905061091c87828585610b84565b94509450505050610931565b60006002915091505b9250929050565b6000600481111561094c5761094b611856565b5b81600481111561095f5761095e611856565b5b0315610a9b576001600481111561097957610978611856565b5b81600481111561098c5761098b611856565b5b036109cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c3906118d1565b60405180910390fd5b600260048111156109e0576109df611856565b5b8160048111156109f3576109f2611856565b5b03610a33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2a9061193d565b60405180910390fd5b60036004811115610a4757610a46611856565b5b816004811115610a5a57610a59611856565b5b03610a9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a91906119cf565b60405180910390fd5b5b50565b60008060ff8360001c169050601f811115610ae5576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000004630604051602001610b699594939291906119ef565b60405160208183030381529060405280519060200120905090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115610bbf576000600391509150610c5d565b600060018787878760405160008152602001604052604051610be49493929190611a5e565b6020604051602081039080840390855afa158015610c06573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c5457600060019250925050610c5d565b80600092509250505b94509492505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c9b82610c70565b9050919050565b610cab81610c90565b8114610cb657600080fd5b50565b600081359050610cc881610ca2565b92915050565b600060208284031215610ce457610ce3610c66565b5b6000610cf284828501610cb9565b91505092915050565b6000819050919050565b610d0e81610cfb565b82525050565b6000602082019050610d296000830184610d05565b92915050565b600080fd5b600060c08284031215610d4a57610d49610d2f565b5b81905092915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610d7857610d77610d53565b5b8235905067ffffffffffffffff811115610d9557610d94610d58565b5b602083019150836001820283011115610db157610db0610d5d565b5b9250929050565b600080600060408486031215610dd157610dd0610c66565b5b600084013567ffffffffffffffff811115610def57610dee610c6b565b5b610dfb86828701610d34565b935050602084013567ffffffffffffffff811115610e1c57610e1b610c6b565b5b610e2886828701610d62565b92509250509250925092565b60008115159050919050565b610e4981610e34565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e89578082015181840152602081019050610e6e565b60008484015250505050565b6000601f19601f8301169050919050565b6000610eb182610e4f565b610ebb8185610e5a565b9350610ecb818560208601610e6b565b610ed481610e95565b840191505092915050565b6000604082019050610ef46000830185610e40565b8181036020830152610f068184610ea6565b90509392505050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b610f4481610f0f565b82525050565b600081519050919050565b600082825260208201905092915050565b6000610f7182610f4a565b610f7b8185610f55565b9350610f8b818560208601610e6b565b610f9481610e95565b840191505092915050565b610fa881610c90565b82525050565b6000819050919050565b610fc181610fae565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610ffc81610cfb565b82525050565b600061100e8383610ff3565b60208301905092915050565b6000602082019050919050565b600061103282610fc7565b61103c8185610fd2565b935061104783610fe3565b8060005b8381101561107857815161105f8882611002565b975061106a8361101a565b92505060018101905061104b565b5085935050505092915050565b600060e08201905061109a600083018a610f3b565b81810360208301526110ac8189610f66565b905081810360408301526110c08188610f66565b90506110cf6060830187610d05565b6110dc6080830186610f9f565b6110e960a0830185610fb8565b81810360c08301526110fb8184611027565b905098975050505050505050565b600060208201905061111e6000830184610e40565b92915050565b7f4d696e696d616c466f727761726465723a207369676e617475726520646f657360008201527f206e6f74206d6174636820726571756573740000000000000000000000000000602082015250565b6000611180603283610f55565b915061118b82611124565b604082019050919050565b600060208201905081810360008301526111af81611173565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006111f082610cfb565b91506111fb83610cfb565b9250828201905080821115611213576112126111b6565b5b92915050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261124557611244611219565b5b80840192508235915067ffffffffffffffff8211156112675761126661121e565b5b60208301925060018202360383131561128357611282611223565b5b509250929050565b600081905092915050565b82818337600083830152505050565b60006112b1838561128b565b93506112be838584611296565b82840190509392505050565b60008160601b9050919050565b60006112e2826112ca565b9050919050565b60006112f4826112d7565b9050919050565b61130c61130782610c90565b6112e9565b82525050565b600061131f8285876112a5565b915061132b82846112fb565b601482019150819050949350505050565b600061134782610e4f565b611351818561128b565b9350611361818560208601610e6b565b80840191505092915050565b6000611379828461133c565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006113be82610cfb565b91506113c983610cfb565b9250826113d9576113d8611384565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600061144f8284866112a5565b91508190509392505050565b600060e082019050611470600083018a610fb8565b61147d6020830189610f9f565b61148a6040830188610f9f565b6114976060830187610d05565b6114a46080830186610d05565b6114b160a0830185610d05565b6114be60c0830184610fb8565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061151157607f821691505b602082108103611524576115236114ca565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261158c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261154f565b611596868361154f565b95508019841693508086168417925050509392505050565b6000819050919050565b60006115d36115ce6115c984610cfb565b6115ae565b610cfb565b9050919050565b6000819050919050565b6115ed836115b8565b6116016115f9826115da565b84845461155c565b825550505050565b600090565b611616611609565b6116218184846115e4565b505050565b5b818110156116455761163a60008261160e565b600181019050611627565b5050565b601f82111561168a5761165b8161152a565b6116648461153f565b81016020851015611673578190505b61168761167f8561153f565b830182611626565b50505b505050565b600082821c905092915050565b60006116ad6000198460080261168f565b1980831691505092915050565b60006116c6838361169c565b9150826002028217905092915050565b6116df82610f4a565b67ffffffffffffffff8111156116f8576116f7611413565b5b61170282546114f9565b61170d828285611649565b600060209050601f831160018114611740576000841561172e578287015190505b61173885826116ba565b8655506117a0565b601f19841661174e8661152a565b60005b8281101561177657848901518255600182019150602085019450602081019050611751565b86831015611793578489015161178f601f89168261169c565b8355505b6001600288020188555050505b505050505050565b600060208201905081810360008301526117c28184610f66565b905092915050565b6000819050602082019050919050565b60006117e68251610fae565b80915050919050565b60006117fa82610e4f565b82611804846117ca565b905061180f816117da565b9250602082101561184f5761184a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360200360080261154f565b831692505b5050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b60006118bb601883610f55565b91506118c682611885565b602082019050919050565b600060208201905081810360008301526118ea816118ae565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611927601f83610f55565b9150611932826118f1565b602082019050919050565b600060208201905081810360008301526119568161191a565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b60006119b9602283610f55565b91506119c48261195d565b604082019050919050565b600060208201905081810360008301526119e8816119ac565b9050919050565b600060a082019050611a046000830188610fb8565b611a116020830187610fb8565b611a1e6040830186610fb8565b611a2b6060830185610d05565b611a386080830184610f9f565b9695505050505050565b600060ff82169050919050565b611a5881611a42565b82525050565b6000608082019050611a736000830187610fb8565b611a806020830186611a4f565b611a8d6040830185610fb8565b611a9a6060830184610fb8565b9594505050505056fea264697066735822122052c67951f50078e164980b4f4e162fb450ffdba9ab09e8a3eb25da282c53e54d64736f6c63430008120033";var deployedBytecode="0x60806040526004361061003f5760003560e01c80632d0335ab1461004457806347153f821461008157806384b0196e146100b2578063bf5d3bdb146100e3575b600080fd5b34801561005057600080fd5b5061006b60048036038101906100669190610cce565b610120565b6040516100789190610d14565b60405180910390f35b61009b60048036038101906100969190610db8565b610169565b6040516100a9929190610edf565b60405180910390f35b3480156100be57600080fd5b506100c761031c565b6040516100da9796959493929190611085565b60405180910390f35b3480156100ef57600080fd5b5061010a60048036038101906101059190610db8565b61041e565b6040516101179190611109565b60405180910390f35b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000606061017885858561041e565b6101b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ae90611196565b60405180910390fd5b600185608001356101c891906111e5565b600260008760000160208101906101df9190610cce565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000808660200160208101906102339190610cce565b73ffffffffffffffffffffffffffffffffffffffff1687606001358860400135898060a001906102639190611228565b8b60000160208101906102769190610cce565b60405160200161028893929190611312565b6040516020818303038152906040526040516102a4919061136d565b600060405180830381858888f193505050503d80600081146102e2576040519150601f19603f3d011682016040523d82523d6000602084013e6102e7565b606091505b5091509150603f87606001356102fd91906113b3565b5a1161030c5761030b6113e4565b5b8181935093505050935093915050565b60006060806000806000606061035c60007f000000000000000000000000000000000000000000000000000000000000000061062290919063ffffffff16565b61039060017f000000000000000000000000000000000000000000000000000000000000000061062290919063ffffffff16565b46306000801b600067ffffffffffffffff8111156103b1576103b0611413565b5b6040519080825280602002602001820160405280156103df5781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b60008061052784848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506105197fdd8f4b70b0f4393e889bd39128a30628a78b61816a9eb8199759e7a349657e488860000160208101906104a09190610cce565b8960200160208101906104b39190610cce565b8a604001358b606001358c608001358d8060a001906104d29190611228565b6040516104e0929190611442565b60405180910390206040516020016104fe979695949392919061145b565b604051602081830303815290604052805190602001206106d2565b6106ec90919063ffffffff16565b90508460800135600260008760000160208101906105459190610cce565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541480156105ca575084600001602081019061059b9190610cce565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b9150509392505050565b60006020835110156105f0576105e983610713565b9050610612565b826105fa83610618565b600001908161060991906116d6565b5060ff60001b90505b92915050565b6000819050919050565b606060ff60001b831461063f576106388361077b565b90506106cc565b81805461064b906114f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610677906114f9565b80156106c45780601f10610699576101008083540402835291602001916106c4565b820191906000526020600020905b8154815290600101906020018083116106a757829003601f168201915b505050505090505b92915050565b60006106e56106df6107ef565b836108a6565b9050919050565b60008060006106fb85856108e7565b9150915061070881610938565b819250505092915050565b600080829050601f8151111561076057826040517f305a27a900000000000000000000000000000000000000000000000000000000815260040161075791906117a8565b60405180910390fd5b80518161076c906117ef565b60001c1760001b915050919050565b6060600061078883610a9e565b90506000602067ffffffffffffffff8111156107a7576107a6611413565b5b6040519080825280601f01601f1916602001820160405280156107d95781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614801561086b57507f000000000000000000000000000000000000000000000000000000000000000046145b15610898577f000000000000000000000000000000000000000000000000000000000000000090506108a3565b6108a0610aee565b90505b90565b60006040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b60008060418351036109285760008060006020860151925060408601519150606086015160001a905061091c87828585610b84565b94509450505050610931565b60006002915091505b9250929050565b6000600481111561094c5761094b611856565b5b81600481111561095f5761095e611856565b5b0315610a9b576001600481111561097957610978611856565b5b81600481111561098c5761098b611856565b5b036109cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c3906118d1565b60405180910390fd5b600260048111156109e0576109df611856565b5b8160048111156109f3576109f2611856565b5b03610a33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2a9061193d565b60405180910390fd5b60036004811115610a4757610a46611856565b5b816004811115610a5a57610a59611856565b5b03610a9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a91906119cf565b60405180910390fd5b5b50565b60008060ff8360001c169050601f811115610ae5576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000004630604051602001610b699594939291906119ef565b60405160208183030381529060405280519060200120905090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115610bbf576000600391509150610c5d565b600060018787878760405160008152602001604052604051610be49493929190611a5e565b6020604051602081039080840390855afa158015610c06573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c5457600060019250925050610c5d565b80600092509250505b94509492505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c9b82610c70565b9050919050565b610cab81610c90565b8114610cb657600080fd5b50565b600081359050610cc881610ca2565b92915050565b600060208284031215610ce457610ce3610c66565b5b6000610cf284828501610cb9565b91505092915050565b6000819050919050565b610d0e81610cfb565b82525050565b6000602082019050610d296000830184610d05565b92915050565b600080fd5b600060c08284031215610d4a57610d49610d2f565b5b81905092915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610d7857610d77610d53565b5b8235905067ffffffffffffffff811115610d9557610d94610d58565b5b602083019150836001820283011115610db157610db0610d5d565b5b9250929050565b600080600060408486031215610dd157610dd0610c66565b5b600084013567ffffffffffffffff811115610def57610dee610c6b565b5b610dfb86828701610d34565b935050602084013567ffffffffffffffff811115610e1c57610e1b610c6b565b5b610e2886828701610d62565b92509250509250925092565b60008115159050919050565b610e4981610e34565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e89578082015181840152602081019050610e6e565b60008484015250505050565b6000601f19601f8301169050919050565b6000610eb182610e4f565b610ebb8185610e5a565b9350610ecb818560208601610e6b565b610ed481610e95565b840191505092915050565b6000604082019050610ef46000830185610e40565b8181036020830152610f068184610ea6565b90509392505050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b610f4481610f0f565b82525050565b600081519050919050565b600082825260208201905092915050565b6000610f7182610f4a565b610f7b8185610f55565b9350610f8b818560208601610e6b565b610f9481610e95565b840191505092915050565b610fa881610c90565b82525050565b6000819050919050565b610fc181610fae565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610ffc81610cfb565b82525050565b600061100e8383610ff3565b60208301905092915050565b6000602082019050919050565b600061103282610fc7565b61103c8185610fd2565b935061104783610fe3565b8060005b8381101561107857815161105f8882611002565b975061106a8361101a565b92505060018101905061104b565b5085935050505092915050565b600060e08201905061109a600083018a610f3b565b81810360208301526110ac8189610f66565b905081810360408301526110c08188610f66565b90506110cf6060830187610d05565b6110dc6080830186610f9f565b6110e960a0830185610fb8565b81810360c08301526110fb8184611027565b905098975050505050505050565b600060208201905061111e6000830184610e40565b92915050565b7f4d696e696d616c466f727761726465723a207369676e617475726520646f657360008201527f206e6f74206d6174636820726571756573740000000000000000000000000000602082015250565b6000611180603283610f55565b915061118b82611124565b604082019050919050565b600060208201905081810360008301526111af81611173565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006111f082610cfb565b91506111fb83610cfb565b9250828201905080821115611213576112126111b6565b5b92915050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261124557611244611219565b5b80840192508235915067ffffffffffffffff8211156112675761126661121e565b5b60208301925060018202360383131561128357611282611223565b5b509250929050565b600081905092915050565b82818337600083830152505050565b60006112b1838561128b565b93506112be838584611296565b82840190509392505050565b60008160601b9050919050565b60006112e2826112ca565b9050919050565b60006112f4826112d7565b9050919050565b61130c61130782610c90565b6112e9565b82525050565b600061131f8285876112a5565b915061132b82846112fb565b601482019150819050949350505050565b600061134782610e4f565b611351818561128b565b9350611361818560208601610e6b565b80840191505092915050565b6000611379828461133c565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006113be82610cfb565b91506113c983610cfb565b9250826113d9576113d8611384565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600061144f8284866112a5565b91508190509392505050565b600060e082019050611470600083018a610fb8565b61147d6020830189610f9f565b61148a6040830188610f9f565b6114976060830187610d05565b6114a46080830186610d05565b6114b160a0830185610d05565b6114be60c0830184610fb8565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061151157607f821691505b602082108103611524576115236114ca565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261158c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261154f565b611596868361154f565b95508019841693508086168417925050509392505050565b6000819050919050565b60006115d36115ce6115c984610cfb565b6115ae565b610cfb565b9050919050565b6000819050919050565b6115ed836115b8565b6116016115f9826115da565b84845461155c565b825550505050565b600090565b611616611609565b6116218184846115e4565b505050565b5b818110156116455761163a60008261160e565b600181019050611627565b5050565b601f82111561168a5761165b8161152a565b6116648461153f565b81016020851015611673578190505b61168761167f8561153f565b830182611626565b50505b505050565b600082821c905092915050565b60006116ad6000198460080261168f565b1980831691505092915050565b60006116c6838361169c565b9150826002028217905092915050565b6116df82610f4a565b67ffffffffffffffff8111156116f8576116f7611413565b5b61170282546114f9565b61170d828285611649565b600060209050601f831160018114611740576000841561172e578287015190505b61173885826116ba565b8655506117a0565b601f19841661174e8661152a565b60005b8281101561177657848901518255600182019150602085019450602081019050611751565b86831015611793578489015161178f601f89168261169c565b8355505b6001600288020188555050505b505050505050565b600060208201905081810360008301526117c28184610f66565b905092915050565b6000819050602082019050919050565b60006117e68251610fae565b80915050919050565b60006117fa82610e4f565b82611804846117ca565b905061180f816117da565b9250602082101561184f5761184a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360200360080261154f565b831692505b5050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b60006118bb601883610f55565b91506118c682611885565b602082019050919050565b600060208201905081810360008301526118ea816118ae565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611927601f83610f55565b9150611932826118f1565b602082019050919050565b600060208201905081810360008301526119568161191a565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b60006119b9602283610f55565b91506119c48261195d565b604082019050919050565b600060208201905081810360008301526119e8816119ac565b9050919050565b600060a082019050611a046000830188610fb8565b611a116020830187610fb8565b611a1e6040830186610fb8565b611a2b6060830185610d05565b611a386080830184610f9f565b9695505050505050565b600060ff82169050919050565b611a5881611a42565b82525050565b6000608082019050611a736000830187610fb8565b611a806020830186611a4f565b611a8d6040830185610fb8565b611a9a6060830184610fb8565b9594505050505056fea264697066735822122052c67951f50078e164980b4f4e162fb450ffdba9ab09e8a3eb25da282c53e54d64736f6c63430008120033";var linkReferences={};var deployedLinkReferences={};var ForwarderAbi = {_format:_format,contractName:contractName,sourceName:sourceName,abi:abi,bytecode:bytecode,deployedBytecode:deployedBytecode,linkReferences:linkReferences,deployedLinkReferences:deployedLinkReferences};

// Address of the DAI contract (for this example)
var ForwarderAddress = "0x4943523cE751691C67B78Dffb502E319778a82BC";
// Entrypoint for the Autotask
function handler(event) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, signature, request, credentials, provider, signer, forwarder, gasLimit, tx;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = event.request.body, signature = _a.signature, request = _a.request, credentials = _a.credentials;
                    provider = new ethers.DefenderRelayProvider(credentials);
                    signer = new ethers.DefenderRelaySigner(credentials, provider, {
                        speed: "fast",
                    });
                    forwarder = new ethers$1.ethers.Contract(ForwarderAddress, ForwarderAbi.abi, signer);
                    gasLimit = (parseInt(request.gas) + 50000).toString();
                    return [4 /*yield*/, forwarder.execute(request, signature, { gasLimit: gasLimit })];
                case 1:
                    tx = _b.sent();
                    return [2 /*return*/, { txHash: tx.hash }];
            }
        });
    });
}

exports.handler = handler;