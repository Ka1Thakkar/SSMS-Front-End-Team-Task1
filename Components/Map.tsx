import React from "react"
import { Map, Marker } from "pigeon-maps"

export default function MyMap() {
  return (
    <Map height={500} defaultCenter={[36.20740085393897, -115.26789593248834]} defaultZoom={16} metaWheelZoom={true}>
      <Marker width={40} anchor={[36.20740085393897, -115.26789593248834]} />
    </Map>
  )
}