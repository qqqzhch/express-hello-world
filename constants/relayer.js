// import { SupportedChainId } from "./chains.js"
const {SupportedChainId} = require('./chains')


  //TokenList
 const UrlList_0x = {
    [SupportedChainId.GOERLI]:"https://goerli.api.0x.org/",
    [SupportedChainId.MAINNET]: "https://api.0x.org/",

    [SupportedChainId.AVALANCHE_FUJITEST]:"",
    [SupportedChainId.AVALANCHE_C_HAIN]:"https://avalanche.api.0x.org/",
   
    [SupportedChainId.ARBITRUM_Goerli]: "",
    [SupportedChainId.ARBITRUM_ONE]: "https://arbitrum.api.0x.org/",
    

    [SupportedChainId.ROPSTEN]: '',
    [SupportedChainId.RINKEBY]: '',
    [SupportedChainId.KOVAN]: '',
    [SupportedChainId.POLYGON]: '',
    [SupportedChainId.POLYGON_MUMBAI]: '',
    [SupportedChainId.CELO]: '',
    [SupportedChainId.CELO_ALFAJORES]: '',
    [SupportedChainId.OPTIMISM]: '',
    [SupportedChainId.OPTIMISM_GOERLI]: '',
  }

  module.exports={UrlList_0x}