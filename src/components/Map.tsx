import { FC, useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

type TCoords = {
  lat: number;
  lng: number;
};

type TInfoPopup = {
  address?: string;
  business?: string;
  phone?: string;
  postal_code?: string;
  state?: string;
  town?: string;
  website_url?: string;
};

type TMarker = {
  coords: TCoords;
  info?: TInfoPopup;
};

type MapProps = {
  draggable?: boolean;
  height: string;
  ubications: TMarker[];
  width: string;
  zoom?: number;
};

const Map: FC<MapProps> = ({
  draggable = true,
  height,
  ubications,
  width,
  zoom = 12,
}) => {
  const [selected, setSelected] = useState<TMarker>({} as TMarker);
  const [markers, setMarkers] = useState<TMarker[]>([]);

  useEffect(() => {
    setMarkers(ubications !== undefined ? ubications : []);
  }, [ubications]);

  return (
    <ReactMapGL
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      mapStyle="mapbox://styles/mapbox/streets-v10"
      initialViewState={{
        latitude: ubications[0].coords?.lat,
        longitude: ubications[0].coords?.lng,
        pitch: 0,
        zoom,
      }}
      style={{ height, width }}
    >
      {markers.length >= 1 &&
        markers.map((marker: TMarker, idx: number) => {
          return (
            <Marker
              draggable={draggable}
              key={idx}
              latitude={marker.coords.lat}
              longitude={marker.coords.lng}
            >
              <img
                alt="Thunder icon"
                className="marker-btn"
                height={40}
                onClick={() =>
                  ubications !== undefined ? setSelected(marker) : undefined
                }
                src={`${process.env.REACT_APP_URI}/assets/img/marker.png`}
                width={40}
              />
            </Marker>
          );
        })}

      {selected && selected.coords ? (
        <Popup
          closeButton={true}
          closeOnClick={false}
          latitude={selected.coords.lat}
          longitude={selected.coords.lng}
          onClose={() => setSelected({} as TMarker)}
        >
          <div className="_marker-info">
            <h3>{selected.info?.business}</h3>
            <div>{selected.info?.address}</div>
            <div>{selected.info?.town}</div>
            <div>{selected.info?.website_url}</div>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
};

export default Map;
