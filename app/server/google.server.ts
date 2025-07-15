type postToSheetProps = {
  respuesta1: string;
  respuesta2: string;
};

export const postToSheet = async (props: postToSheetProps): Promise<any> => {
  try {
    const response = await fetch(`${process.env.GOOGLE_SHEETS_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });

    if (response.status > 299) {
      throw new Response(`Error: ${JSON.stringify(response)}`, {
        status: response.status,
      });
    }
    return await response.json();
  } catch (e: any) {
    return new Response(e);
  }
};
