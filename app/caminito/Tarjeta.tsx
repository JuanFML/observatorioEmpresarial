type TarjetaProps = {
  children: React.ReactNode;
  text: string;
};

export const Tarjeta = (props: TarjetaProps) => {
  const { children, text } = props;
  return (
    <>
      <div className="p-2 w-[220px] h-[250px]  rounded-2xl shadow-[0px_4px_15px_rgba(0,0,0,0.25)] hover:bg-blue-950 hover:cursor-pointer grid grid-cols-1 hover:text-gray-100">
        <div className="flex items-end justify-center">{children}</div>
        <div className="text-center text-xl">{text}</div>
      </div>
    </>
  );
};
