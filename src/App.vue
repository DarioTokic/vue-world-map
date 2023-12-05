<script setup lang="ts">
import VueWorldMap from './components/VueWorldMap.vue'

const countryData = [
  {
    id: 'US',
    value: 7323
  },
  {
    id: 'GB',
    value: 1712
  },
  {
    id: 'CA',
    value: 1240
  },
  {
    id: 'CO',
    value: 1154
  },
  {
    id: 'AU',
    value: 1027
  },
  {
    id: 'IT',
    value: 836
  }
]

const passiveColor = '#EEEEEE'
const activeColor = '#2196f3'
</script>

<template>
  <VueWorldMap :coutryData="countryData" :passiveColor="passiveColor" :activeColor="activeColor" />
</template>

<style scoped></style>
