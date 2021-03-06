import "../styles/Map.scss";
import "../styles/Home.scss";
import React, { useState } from "react";
import { MapChart } from "./MapChart";
import SightingMapInfo from "./SightingMapInfo";
import { BannerImage } from "./BannerImage";

export interface Chosen {
    id: number,
    lat: number,
    lon: number
}

export default function Map(): JSX.Element {

    const [chosen, setChosen] = useState<Chosen>();

    return (
        <div className="map-component-container">
            <BannerImage />
            <div className="map-component" data-testid="map-component">
                <h2 className="map-header">Map of Sightings</h2>
                <div className="map-container" data-testid="map-container">
                    <MapChart chosen={chosen} setChosen={setChosen} />
                </div>
                <div className="map-info" data-testid="map-info">
                    <SightingMapInfo chosen={chosen} />
                </div>
            </div>
        </div>
    );
}