# Environment variables
RIOT_API_KEY = Riot api key

# Simple example
```js
import { RiotApi } from 'api-riot-games'
import { Regions } from 'api-riot-games/constants'

const api = new RiotApi()

export async function summonerByNameExample () {
  return await api.leagueOfLegends.summoner.getByName('Hide on bush', Regions.KOREA)
}
```
[More examples](https://github.com/Sansossio/riot-games-api/tree/master/example)

# Run all examples
## Simple
```sh npm run example```

## Specific examples
```sh npm run example --example={exampleFunctionName}```

## With docker
Edit docker-compose.yml with your api key and:
```sh docker-compose up```