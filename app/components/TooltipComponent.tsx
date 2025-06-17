import { useState } from "react";

type TooltipComponentProps = {
  text: string;
  children?: React.ReactNode;
};

export const TooltipComponent = (props: TooltipComponentProps) => {
  const { children, text } = props;
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute z-10 left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-800 px-3 py-1 text-sm text-white shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
};
