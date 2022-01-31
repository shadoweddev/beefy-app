export const fusePools = [
  {
    id: 'fusefi-wfuse-usdc',
    name: 'USDC-FUSE LP',
    token: 'USDC-FUSE LP',
    tokenDescription: 'FuseFi',
    tokenAddress: '0x9f17b1895633E855b8b1C1D0Ade9B3B72EB0590C',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooFuseFiUSDC-FUSE',
    earnedTokenAddress: '0x98d3913474fccEDeB63077237914be00202fB007',
    earnContractAddress: '0x98d3913474fccEDeB63077237914be00202fB007',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'fusefi-wfuse-usdc',
    oraclePrice: 0,
    withdrawalFee: '0%',
    depositsPaused: false,
    status: 'active',
    platform: 'FuseFi',
    assets: ['USDC', 'FUSE'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl: 'https://app.fuse.fi/#/add/FUSE/0x620fd5fa44be6af63715ef4e65ddfa0387ad13f5',
    buyTokenUrl:
      'https://app.fuse.fi/#/swap?inputCurrency=FUSE&outputCurrency=0x620fd5fa44be6af63715ef4e65ddfa0387ad13f5',
  },
  {
    id: 'sushi-usdc-usdt',
    name: 'USDC-USDT LP',
    token: 'USDC-USDT SLP',
    tokenDescription: 'SushiSwap',
    tokenAddress: '0x00E485d833099679eD7D121CE46a9557ea8aDa1e',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiUSDC-USDT',
    earnedTokenAddress: '0xf83866F9269fd96F4CAd5B660E11d8E031C48909',
    earnContractAddress: '0xf83866F9269fd96F4CAd5B660E11d8E031C48909',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-usdc-usdt',
    oraclePrice: 0,
    withdrawalFee: '0%',
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['USDC', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x620fd5fa44BE6af63715Ef4E65DDFA0387aD13F5/0xFaDbBF8Ce7D5b7041bE672561bbA99f79c532e10',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x620fd5fa44BE6af63715Ef4E65DDFA0387aD13F5&outputCurrency=0xFaDbBF8Ce7D5b7041bE672561bbA99f79c532e10',
  },
  {
    id: 'sushi-sushi-weth',
    name: 'SUSHI-WETH LP',
    token: 'SUSHI-WETH SLP',
    tokenDescription: 'SushiSwap',
    tokenAddress: '0xF9C63E6e21d65ba3Cb6B95790F559E8Da1B38764',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiSUSHI-WETH',
    earnedTokenAddress: '0x202D9EA0AeAC4B30f9f4aABd084Fb8C1DE316840',
    earnContractAddress: '0x202D9EA0AeAC4B30f9f4aABd084Fb8C1DE316840',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-sushi-weth',
    oraclePrice: 0,
    withdrawalFee: '0%',
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['SUSHI', 'WETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x90708b20ccc1eb95a4fa7c8b18fd2c22a0ff9e78/0xa722c13135930332Eb3d749B2F0906559D2C5b99',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x90708b20ccc1eb95a4fa7c8b18fd2c22a0ff9e78&outputCurrency=0xa722c13135930332Eb3d749B2F0906559D2C5b99',
  },
  {
    id: 'sushi-wfuse-usdc',
    name: 'FUSE-USDC LP',
    token: 'FUSE-USDC SLP',
    tokenDescription: 'SushiSwap',
    tokenAddress: '0xba9CA720e314F42E17E80991c1d0AFfE47387108',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiFUSE-USDC',
    earnedTokenAddress: '0x87FFA2E1D232d5B98fd4366C311b568c022aE650',
    earnContractAddress: '0x87FFA2E1D232d5B98fd4366C311b568c022aE650',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-wfuse-usdc',
    oraclePrice: 0,
    withdrawalFee: '0%',
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['FUSE', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x0BE9e53fd7EDaC9F859882AfdDa116645287C629/0x620fd5fa44BE6af63715Ef4E65DDFA0387aD13F5',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x0BE9e53fd7EDaC9F859882AfdDa116645287C629&outputCurrency=0x620fd5fa44BE6af63715Ef4E65DDFA0387aD13F5',
  },
  {
    id: 'sushi-wfuse-weth',
    name: 'WETH-FUSE LP',
    token: 'WETH-FUSE SLP',
    tokenDescription: 'SushiSwap',
    tokenAddress: '0x90c3bA00d2F7F15Cd9FDE087538be3A2865E7E2F',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiFUSE-WETH',
    earnedTokenAddress: '0xd4E241053314254e62050aDC84B271F9d2164a16',
    earnContractAddress: '0xd4E241053314254e62050aDC84B271F9d2164a16',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-wfuse-weth',
    oraclePrice: 0,
    withdrawalFee: '0%',
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['WETH', 'FUSE'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x0BE9e53fd7EDaC9F859882AfdDa116645287C629/0xa722c13135930332Eb3d749B2F0906559D2C5b99',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x0BE9e53fd7EDaC9F859882AfdDa116645287C629&outputCurrency=0xa722c13135930332Eb3d749B2F0906559D2C5b99',
  },
  {
    id: 'fuse-fuse',
    logo: 'single-assets/FUSE.svg',
    name: 'FUSE',
    token: 'FUSE',
    tokenDescription: 'Beefy Delegator',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooFuse',
    earnedTokenAddress: '0x2C43DBef81ABa6b95799FD2aEc738Cd721ba77f3',
    earnContractAddress: '0x2C43DBef81ABa6b95799FD2aEc738Cd721ba77f3',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'WFUSE',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Fuse',
    assets: ['WFUSE'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'SingleStake',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://app.fuse.fi/#/swap?inputCurrency=FUSE&outputCurrency=0xa722c13135930332Eb3d749B2F0906559D2C5b99',
  },
  {
    id: 'fusefi-wfuse-weth',
    name: 'WETH-FUSE LP',
    token: 'WETH-FUSE LP',
    tokenDescription: 'FuseFi',
    tokenAddress: '0x75e24462108E49B71278c93b49B35A5837c0547C',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooFuseFiWETH-FUSE',
    earnedTokenAddress: '0x7c7B7FbccA5699175003ecbe1B41E79F40385469',
    earnContractAddress: '0x7c7B7FbccA5699175003ecbe1B41E79F40385469',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'fusefi-wfuse-weth',
    oraclePrice: 0,
    withdrawalFee: '0%',
    depositsPaused: false,
    status: 'active',
    platform: 'FuseFi',
    assets: ['WETH', 'FUSE'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl: 'https://app.fuse.fi/#/add/FUSE/0xa722c13135930332Eb3d749B2F0906559D2C5b99',
    buyTokenUrl:
      'https://app.fuse.fi/#/swap?inputCurrency=FUSE&outputCurrency=0xa722c13135930332Eb3d749B2F0906559D2C5b99',
  },
  {
    id: 'fusefi-wfuse-g$',
    name: 'G$-FUSE LP',
    token: 'G$-FUSE LP',
    tokenDescription: 'FuseFi',
    tokenAddress: '0x8d441C2Ff54C015A1BE22ad88e5D42EFBEC6C7EF',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooFuseFiG$-FUSE',
    earnedTokenAddress: '0xa5aaE3a55cA356C62b5425AA4bFC212542B17777',
    earnContractAddress: '0xa5aaE3a55cA356C62b5425AA4bFC212542B17777',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'fusefi-wfuse-g$',
    oraclePrice: 0,
    withdrawalFee: '0%',
    depositsPaused: false,
    status: 'active',
    platform: 'FuseFi',
    assets: ['G', 'FUSE'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl: 'https://app.fuse.fi/#/add/FUSE/0x495d133B938596C9984d462F007B676bDc57eCEC',
    buyTokenUrl:
      'https://app.fuse.fi/#/swap?inputCurrency=FUSE&outputCurrency=0x495d133B938596C9984d462F007B676bDc57eCEC',
  },
  {
    id: 'fusefi-fusd-bnb',
    name: 'fUSD-BNB LP',
    token: 'fUSD-BNB LP',
    tokenDescription: 'FuseFi',
    tokenAddress: '0x123e18262642a090b209A9CdD5bC5DFA03d734D1',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooFuseFifUSD-BNB',
    earnedTokenAddress: '0x3dE0279f183f9C9eFCD19C60c1f83288B50dB659',
    earnContractAddress: '0x3dE0279f183f9C9eFCD19C60c1f83288B50dB659',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'fusefi-fusd-bnb',
    oraclePrice: 0,
    withdrawalFee: '0%',
    depositsPaused: false,
    status: 'active',
    platform: 'FuseFi',
    assets: ['fUSD', 'BNB'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.fuse.fi/#/add/0x6acb34b1Df86E254b544189Ec32Cf737e2482058/0x249BE57637D8B013Ad64785404b24aeBaE9B098B',
    buyTokenUrl:
      'https://app.fuse.fi/#/swap?inputCurrency=0x6acb34b1Df86E254b544189Ec32Cf737e2482058&outputCurrency=0x249BE57637D8B013Ad64785404b24aeBaE9B098B',
  },
  {
    id: 'fusefi-wfuse-busd',
    name: 'BUSD-FUSE LP',
    token: 'BUSD-FUSE LP',
    tokenDescription: 'FuseFi',
    tokenAddress: '0x2e7DeDEfC1b40eb2C935A5d07ACDb8F8a9B2A91D',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooFuseFiBUSD-FUSE',
    earnedTokenAddress: '0xF9eBb381dC153D0966B2BaEe776de2F400405755',
    earnContractAddress: '0xF9eBb381dC153D0966B2BaEe776de2F400405755',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'fusefi-wfuse-busd',
    oraclePrice: 0,
    withdrawalFee: '0%',
    depositsPaused: false,
    status: 'active',
    platform: 'FuseFi',
    assets: ['BUSD', 'FUSE'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl: 'https://app.fuse.fi/#/add/FUSE/0x6a5F6A8121592BeCd6747a38d67451B310F7f156',
    buyTokenUrl:
      'https://app.fuse.fi/#/swap?inputCurrency=FUSE&outputCurrency=0x6a5F6A8121592BeCd6747a38d67451B310F7f156',
  },
  {
    id: 'fusefi-wfuse-fusd',
    name: 'fUSD-FUSE LP',
    token: 'fUSD-FUSE LP',
    tokenDescription: 'FuseFi',
    tokenAddress: '0xcDd8964BA8963929867CAfFCf5942De4F085bFB7',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooFuseFifUSD-FUSE',
    earnedTokenAddress: '0x9712b6aff7d2dB96097565EB8b2183b75e839130',
    earnContractAddress: '0x9712b6aff7d2dB96097565EB8b2183b75e839130',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'fusefi-wfuse-fusd',
    oraclePrice: 0,
    withdrawalFee: '0%',
    depositsPaused: false,
    status: 'active',
    platform: 'FuseFi',
    assets: ['fUSD', 'FUSE'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl: 'https://app.fuse.fi/#/add/FUSE/0x249BE57637D8B013Ad64785404b24aeBaE9B098B',
    buyTokenUrl:
      'https://app.fuse.fi/#/swap?inputCurrency=FUSE&outputCurrency=0x249BE57637D8B013Ad64785404b24aeBaE9B098B',
  },
  {
    id: 'fusefi-wbtc-weth',
    name: 'WETH-WBTC LP',
    token: 'WETH-WBTC LP',
    tokenDescription: 'FuseFi',
    tokenAddress: '0x79FB917292f841Ab64941C04aCDf5F9059aa24E7',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooFuseFiWETH-WBTC',
    earnedTokenAddress: '0x8d81807F19b97FA86EecaB32F1376645FBB4d2F9',
    earnContractAddress: '0x8d81807F19b97FA86EecaB32F1376645FBB4d2F9',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'fusefi-wbtc-weth',
    oraclePrice: 0,
    withdrawalFee: '0.01%',
    depositsPaused: false,
    status: 'active',
    platform: 'FuseFi',
    assets: ['WETH', 'WBTC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl:
      'https://app.fuse.fi/#/add/0x33284f95ccb7B948d9D352e1439561CF83d8d00d/0xa722c13135930332Eb3d749B2F0906559D2C5b99',
    buyTokenUrl:
      'https://app.fuse.fi/#/swap?inputCurrency=0x33284f95ccb7B948d9D352e1439561CF83d8d00d&outputCurrency=0xa722c13135930332Eb3d749B2F0906559D2C5b99',
  },
];
