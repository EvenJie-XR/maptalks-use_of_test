// 可选的draco插件
import '@maptalks/transcoders.draco';
// 可选的crn纹理解析插件
import '@maptalks/transcoders.crn';
// 可选的ktx2纹理解析插件
import '@maptalks/transcoders.ktx2';
import { Map, TileLayer } from "maptalks-gl"


export class MaptalksUtils {
    map: Map
    constructor(containerId: string) {
        this.map = new Map(containerId, {
            center: [-0.113049, 51.498568],
            zoom: 14,
            baseLayer: new TileLayer("base", {
              urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
              subdomains: ["a", "b", "c", "d"],
              attribution: "&copy; <a href='http://osm.org'>OpenStreetMap</a> contributors, &copy; <a href='https://carto.com/'>CARTO</a>",
            }),
        });
    }
}