import { TextField } from "@mui/material";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
  type MapCameraChangedEvent,
  type MapMouseEvent,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import { Form } from "react-router";
import { Circle } from "~/components/Circle";
import { ListaLocales } from "~/components/ListaLocales";
import { NavBar } from "~/components/NavBar";
import { TooltipComponent } from "~/components/TooltipComponent";
import { colors } from "~/utils/constants";
type MapaProps = {
  API_KEY: string;
  actionData: DenueLugar[] | undefined;
};

export function Mapa({ API_KEY, actionData }: MapaProps) {
  const [showLat, setShowLat] = useState<number | undefined>();
  const [showLng, setShowLng] = useState<number | undefined>();
  const [lat, setLat] = useState<number | undefined>(25.5445);
  const [lng, setLng] = useState<number | undefined>(-103.4477);
  const [circleRadius, setCircleRadius] = useState<number | undefined>(300);
  const [showList, setShowList] = useState<boolean>(false);

  const centro = {
    lat: 25.5428,
    lng: -103.449,
  };
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="pt-4"></div>
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
          defaultValue={circleRadius}
          onChange={(event) => setCircleRadius(Number(event.target.value))}
        />
        <button
          type="submit"
          className="py-3 px-2 text-blue-600 rounded-md bg-white  cursor-pointer hover:bg-blue-700 hover:transform hover:text-white hover:duration-300"
          onClick={() => setShowList(true)}
        >
          <div className=" text-center text-lg">Buscar</div>
        </button>
      </Form>

      {showList && (
        <ListaLocales lugares={actionData} onClose={() => setShowList(false)} />
      )}
      <div className="flex-1 relative">
        <APIProvider apiKey={API_KEY as string} language="es">
          <Map
            defaultZoom={10}
            disableDefaultUI={true}
            gestureHandling={"greedy"}
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
              setLat(ev.detail.latLng?.lat);
              setLng(ev.detail.latLng?.lng);
            }}
          >
            {lat && lng && (
              <>
                <AdvancedMarker
                  key={"centralPoint"}
                  position={{ lat: lat, lng: lng }}
                >
                  <Pin
                    background={colors[0]}
                    glyphColor={"#000"}
                    borderColor={"#000"}
                  />
                </AdvancedMarker>
                <Circle
                  radius={circleRadius}
                  center={{ lat: lat, lng: lng }}
                  strokeColor={"#0c4cb3"}
                  strokeOpacity={1}
                  strokeWeight={3}
                  fillColor={"#3b82f6"}
                  fillOpacity={0.2}
                  clickable={false}
                />
              </>
            )}
            {actionData &&
              actionData.map((lugar, index) => {
                const location: google.maps.LatLngLiteral = {
                  lat: Number(lugar.Latitud),
                  lng: Number(lugar.Longitud),
                };
                console.log(lugar);
                return (
                  <AdvancedMarker
                    key={lugar.Nombre + index}
                    clickable={true}
                    position={location}
                  />
                );
              })}
          </Map>
        </APIProvider>
      </div>
    </div>
  );
}
