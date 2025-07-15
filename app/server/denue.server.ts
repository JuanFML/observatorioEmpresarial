type getDenueProps = {
  condicion: string;
  latitud: string;
  longitud: string;
  metros: string;
};

export const getDenue = async (
  props: getDenueProps
): Promise<DenueLugar[] | undefined> => {
  const { condicion, latitud, longitud, metros } = props;
  const url = `https://www.inegi.org.mx/app/api/denue/v1/consulta/Buscar/${condicion}/${latitud},${longitud}/${metros}/${process.env.INEGI_API}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status > 299) {
      throw new Response(`Error: ${JSON.stringify(response)}`, {
        status: response.status,
      });
    }
    return await response.json();
  } catch (e: any) {
    return undefined;
  }
};
