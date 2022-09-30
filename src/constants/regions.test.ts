import { RegionGroups, Regions, regionToRegionGroup } from '.'

describe('Regions', () => {
  describe('regionToRegionGroup', () => {
    it('should match americas', () => {
      expect(regionToRegionGroup(Regions.AMERICA_NORTH)).toEqual(RegionGroups.AMERICAS)
      expect(regionToRegionGroup(Regions.BRAZIL)).toEqual(RegionGroups.AMERICAS)
      expect(regionToRegionGroup(Regions.LAT_NORTH)).toEqual(RegionGroups.AMERICAS)
      expect(regionToRegionGroup(Regions.LAT_SOUTH)).toEqual(RegionGroups.AMERICAS)
    })

    it('should match europe', () => {
      expect(regionToRegionGroup(Regions.EU_EAST)).toEqual(RegionGroups.EUROPE)
      expect(regionToRegionGroup(Regions.EU_WEST)).toEqual(RegionGroups.EUROPE)
      expect(regionToRegionGroup(Regions.TURKEY)).toEqual(RegionGroups.EUROPE)
      expect(regionToRegionGroup(Regions.RUSSIA)).toEqual(RegionGroups.EUROPE)
    })

    it('should match asia', () => {
      expect(regionToRegionGroup(Regions.JAPAN)).toEqual(RegionGroups.ASIA)
      expect(regionToRegionGroup(Regions.KOREA)).toEqual(RegionGroups.ASIA)
    })

    it('should match sea', () => {
      expect(regionToRegionGroup(Regions.OCEANIA)).toEqual(RegionGroups.SEA)
    })

    it('should throw error when the region does not exists', () => {
      expect(() => regionToRegionGroup('not a region' as any)).toThrowError()
    })
  })
})
