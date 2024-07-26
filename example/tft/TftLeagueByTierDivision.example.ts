import { TftApi } from "../../src";
import { configTft } from "../config/config";
import { Tiers } from "../../src/constants";
import { Divisions } from "../../src/constants";

const api = new TftApi();

export async function TftLeagueByTierDivision() {
  const league = await api.League.getByTierDivision(
    configTft.region,
    Tiers.DIAMOND,
    Divisions.I
  );
}
