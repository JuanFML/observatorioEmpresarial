import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { NavBar } from "~/components/NavBar";

type MapaProps = {
  API_KEY: string;
};
export function Mapa({ API_KEY }: MapaProps) {
  return (
    <>
      <NavBar />

      <APIProvider apiKey={API_KEY as string}>
        <Map
          style={{ width: "100vw", height: "85vh" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider>
    </>
  );
}
