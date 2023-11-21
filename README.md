### See original docs [here](https://github.com/Sansossio/twisted#twisted)

#### Differences (to my knowledge)
- Added account-v1 [get by puuid](https://developer.riotgames.com/apis#account-v1/GET_getByPuuid) and [get by riot id](https://developer.riotgames.com/apis#account-v1/GET_getByRiotId) endpoints. [Active shard](https://developer.riotgames.com/apis#account-v1/GET_getActiveShard) and [access token](https://developer.riotgames.com/apis#account-v1/GET_getByAccessToken) are not implemented. The summoner endpoint, although still functional as of 23/11/21, is [deprecated](https://www.riotgames.com/en/DevRel/summoner-names-to-riot-id).
- Added OCE regions (vn, tw, th, sg, ph)
- Fixed 429 retry attempts
- Added ChallengeV1 Endpoints



```
npm i github:rleaf/twisted
```

account-v1 "get by riot id" example:
```js
import { RiotApi, Constants } from 'twisted'

const api = new RiotApi()

const resByRiotId = (await api.Account.getByRiotId('Night Owl', 'na1', Constants.RegionGroups.AMERICAS)).response

console.log(resByRiotId)
/** 
  {
     puuid: '...',
     gameName: 'Night Owl',
     tagLine: 'NA1'
  }
*/
```