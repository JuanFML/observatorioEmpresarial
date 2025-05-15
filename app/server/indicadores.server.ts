export const getIGAETotal = async () => {
  const url = `https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/496150/es/0700/true/BISE/2.0/${process.env.INEGI_API}?type=json`;
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
    throw new Response(e);
  }
};
