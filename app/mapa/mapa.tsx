import { TextField } from "@mui/material";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  type MapCameraChangedEvent,
  type MapMouseEvent,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import { Form } from "react-router";
import { NavBar } from "~/components/NavBar";

type MapaProps = {
  API_KEY: string;
  actionData: DenueLugar[] | undefined;
};

export function Mapa({ API_KEY, actionData }: MapaProps) {
  const [showLat, setShowLat] = useState<number | undefined>();
  const [showLng, setShowLng] = useState<number | undefined>();
  const [lat, setLat] = useState<number | undefined>(25.5445);
  const [lng, setLng] = useState<number | undefined>(-103.4477);
  const centro = {
    lat: 23.8771,
    lng: -102.3788,
  };
  return (
    <>
      <NavBar />
      <div>Latitud: {showLat}</div>
      <div>Longitud: {showLng}</div>
      <Form method="post" className="flex items-center">
        <TextField
          id="condicion"
          name="condicion"
          label="Condición"
          variant="outlined"
          defaultValue={"restaurante"}
        />
        <TextField
          id="latitud"
          name="latitud"
          label="Latitud"
          variant="outlined"
          value={lat}
        />
        <TextField
          id="longitud"
          name="longitud"
          label="Longitud"
          variant="outlined"
          value={lng}
        />
        <TextField
          id="metros"
          name="metros"
          label="Metros"
          variant="outlined"
          defaultValue={300}
        />
        <button
          type="submit"
          className="py-3 px-2 text-blue-600 rounded-md bg-white  cursor-pointer hover:bg-blue-700 hover:transform hover:text-white hover:duration-300"
        >
          <div className=" text-center text-lg">Buscar</div>
        </button>
      </Form>

      <APIProvider apiKey={API_KEY as string} language="es">
        <Map
          style={{ width: "100vw", height: "85vh" }}
          defaultZoom={6}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          defaultCenter={centro}
          mapId={"MAPA_OBERSVATORIO"}
          // onCameraChanged={(ev: MapCameraChangedEvent) =>
          //   console.log(
          //     "camera changed:",
          //     ev.detail.center,
          //     "zoom:",
          //     ev.detail.zoom
          //   )
          // }
          onMousemove={(ev: MapMouseEvent) => {
            setShowLat(ev.detail.latLng?.lat);
            setShowLng(ev.detail.latLng?.lng);
          }}
          onClick={(ev: MapMouseEvent) => {
            console.log(ev.detail.latLng);
            setLat(ev.detail.latLng?.lat);
            setLng(ev.detail.latLng?.lng);
          }}
        >
          {actionData &&
            actionData.map((lugar, index) => {
              const location: google.maps.LatLngLiteral = {
                lat: Number(lugar.Latitud),
                lng: Number(lugar.Longitud),
              };
              return (
                <AdvancedMarker
                  key={lugar.Nombre + index}
                  position={location}
                />
              );
            })}
        </Map>
      </APIProvider>
    </>
  );
}
