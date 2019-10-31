# Install
``` npm i api-riot-games```
# Environment variables
RIOT_API_KEY = Riot api key

# Simple example
```js
import { RiotApi, Constants } from 'api-riot-games'

const api = new RiotApi()

export async function summonerByNameExample () {
  return await api.Lol.Summoner.getByName('Hide on bush', Constants.Regions.KOREA)
}
```
[More examples](https://github.com/Sansossio/riot-games-api/tree/master/example)

# Automatic rate limits reattempts
```js
import { RiotApi } from 'api-riot-games'

const api = new RiotApi({
   /**
   * If api response is 429 (rate limits) try reattempt after needed time (default true)
   */
  rateLimitRetry: true,
  /**
   * Number of time to retry after rate limit response (default 1)
   */
  rateLimitRetryAttempts: 1
})
```

# Endpoints 
Everything should be in the same order as in the official docs.
## CHAMPION-MASTERY-V4
- [x] `Get all champion mastery entries sorted by number of champion points descending.`
- [x] `Get a champion mastery by player ID and champion ID.`
- [x] `Get a player's total champion mastery score, which is the sum of individual champion mastery levels.`
## CHAMPION-V3
- [x] `Retrieve all champions.`
- [x] `Retrieve champion by ID.`
## LEAGUE-V4
- [x] `Get the challenger league for given queue.`
- [x] `Get league entries in all queues for a given summoner ID.`
- [x] `Get all the league entries.`
- [x] `Get the grandmaster league of a specific queue.`
- [x] `Get league with given ID, including inactive entries.`
- [x] `Get the master league for given queue.`
- [x] `Get the queues that have positional ranks enabled.` (deprecated June 17th and in `v0.9.10`)
- [x] `Get league positions in all queues for a given summoner ID.` (deprecated June 17th and in `v0.9.10`)
- [x] `Get all the positional league entries.` (deprecated June 17th and in `v0.9.10`)
## LOL-STATUS-V3
- [x] `Get League of Legends status for the given shard.`
- [x] `Get matchlist for games played on given account ID and platform ID and filtered using given filter parameters, if any.`
- [x] `Get match timeline by match ID.`
- [x] `Get match IDs by tournament code.`
- [x] `Get match by match ID and tournament code.`
## SPECTATOR-V4
- [x] `Get current game information for the given summoner ID.`
- [x] `Get list of featured games.`
## SUMMONER-V4
- [x] `Get a summoner by account ID.`
- [x] `Get a summoner by summoner name.`
- [x] `Get a summoner by PUUID.`
- [x] `Get a summoner by summoner ID.`
## TOURNAMENT-STUB-V4
- [ ] `Create a mock tournament code for the given tournament.`
- [ ] `Gets a mock list of lobby events by tournament code.`
- [ ] `Creates a mock tournament provider and returns its ID.`
- [ ] `Creates a mock tournament and returns its ID.`
## TOURNAMENT-V4
- [ ] `Create a tournament code for the given tournament.`
- [ ] `Returns the tournament code DTO associated with a tournament code string.`
- [ ] `Update the pick type, map, spectator type, or allowed summoners for a code.`
- [ ] `Gets a list of lobby events by tournament code.`
- [ ] `Creates a tournament provider and returns its ID.`
- [ ] `Creates a tournament and returns its ID.`

# Run all examples

Download code from git and:

## Simple
```sh npm run example```

## Specific examples
```sh npm run example --example={exampleFunctionName}```

## With docker
Edit docker-compose.yml with your api key and:
```sh docker-compose up```
