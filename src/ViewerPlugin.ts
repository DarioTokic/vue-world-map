import type { App } from 'vue'
import { VueWorldMap } from './components'

interface CountryData {
  id: string
  value: number
}

interface ViewerPluginOptions {
  countryData: CountryData[]
  passiveColor?: string
  activeColor?: string
}

function install(
  app: App,
  options: ViewerPluginOptions = {
    countryData: [],
    passiveColor: '#F5F5F5',
    activeColor: '#2196f3'
  }
) {
  const { countryData, passiveColor, activeColor } = options

  app.component('VueWorldMap', VueWorldMap)
  app.provide('countryData', countryData)
  app.provide('passiveColor', passiveColor)
  app.provide('activeColor', activeColor)
}

export default { install }

export { VueWorldMap }
