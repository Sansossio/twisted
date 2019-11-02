import { TftApi } from '../../src'

export function staticFilesExample () {
  const api = new TftApi().StaticFiles
  return [
    api.Champions(),
    api.Hexes(),
    api.Items(),
    api.Traits()
  ]
}
