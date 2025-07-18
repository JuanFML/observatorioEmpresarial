export const getSeriePorFecha = async (
  serie: string,
  fechaInicial: string,
  feachaFinal: string
) => {
  const url = `https://www.banxico.org.mx/SieAPIRest/service/v1/series/${serie}/datos/${fechaInicial}/${feachaFinal}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Bmx-Token": process.env.BANXICO_TOKEN as string,
      },
    });
    if (response.status > 299) {
      throw new Response(`Error: ${JSON.stringify(response)}`, {
        status: response.status,
      });
    }
    return await response.json();
  } catch (e: any) {
    throw new Response(e);
  }
};

export const getTodaLaSerie = async (serie: string) => {
  const url = `https://www.banxico.org.mx/SieAPIRest/service/v1/series/${serie}/datos`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Bmx-Token": process.env.BANXICO_TOKEN as string,
      },
    });
    if (response.status > 299) {
      throw new Response(`Error: ${JSON.stringify(response)}`, {
        status: response.status,
      });
    }
    return await response.json();
  } catch (e: any) {
    throw new Response(e);
  }
};
