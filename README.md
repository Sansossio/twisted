### See original docs [here](https://github.com/Sansossio/twisted#twisted)

```
npm i github:rleaf/twisted
```

#### What's in this fork
- Partially implemented account-v1. [EXAMPLES](https://github.com/rleaf/twisted/blob/master/example/riot/Account.examples.ts) `getBySummonerName` in summoner-v4 and tft-summoner-v1, although still functional as of 23/11/21, is [deprecated](https://www.riotgames.com/en/DevRel/summoner-names-to-riot-id).
  - [x] [get by puuid](https://developer.riotgames.com/apis#account-v1/GET_getByPuuid)
  - [x] [get by riot id](https://developer.riotgames.com/apis#account-v1/GET_getByRiotId)
  - [ ] [active shard](https://developer.riotgames.com/apis#account-v1/GET_getActiveShard)
  - [ ] [access token](https://developer.riotgames.com/apis#account-v1/GET_getByAccessToken)
- Added lol-challenges-v1 [EXAMPLES](https://github.com/rleaf/twisted/blob/master/example/lol/Challenges.example.ts).
  - [x] [config](https://developer.riotgames.com/apis#lol-challenges-v1/GET_getAllChallengeConfigs)
  - [x] [percentiles](https://developer.riotgames.com/apis#lol-challenges-v1/GET_getAllChallengePercentiles)
  - [x] [challenge config](https://developer.riotgames.com/apis#lol-challenges-v1/GET_getChallengeConfigs)
  - [x] [leaderboards](https://developer.riotgames.com/apis#lol-challenges-v1/GET_getChallengeLeaderboards)
  - [x] [challenge percentiles](https://developer.riotgames.com/apis#lol-challenges-v1/GET_getChallengePercentiles)
  - [x] [player challenge data](https://developer.riotgames.com/apis#lol-challenges-v1/GET_getPlayerData)
- Added OCE regions: `vn`, `tw`, `th`, `sg`, `ph`
- Fixed 429 retry attempts