import { LolApi } from "../../src/apis/lol/lol";
import { Regions } from "../../src/constants";

export async function statusV4Example() {
  const api = new LolApi();

  const status = (await api.StatusV4.get(Regions.EU_WEST)).response;
  console.log(status.locales);
  console.log(status.maintenances)
  console.log(status.incidents)
}