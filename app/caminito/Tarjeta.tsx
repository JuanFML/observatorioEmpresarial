type TarjetaProps = {
  children: React.ReactNode;
  text: string;
  setTexto?: React.Dispatch<React.SetStateAction<string>>;
  textToConcat?: string;
};

export const Tarjeta = (props: TarjetaProps) => {
  const { children, text, textToConcat, setTexto } = props;

  const handleClick = () => {
    setTexto && setTexto((prev) => prev + textToConcat);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="p-2 xl:w-[200px] xl:h-[230px] w-[110px] h-[125px] rounded-2xl shadow-[0px_4px_15px_rgba(0,0,0,0.25)] hover:bg-blue-950 hover:cursor-pointer grid grid-cols-1 hover:text-gray-100"
      >
        <div className="flex items-end justify-center">{children}</div>
        <div className="text-center xl:text-xl text-sm">{text}</div>
      </div>
    </>
  );
};
