import { useState } from "react";

type ExpandablePanelProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

function ExpandablePanel({ header, children }: ExpandablePanelProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2 border rounded">
      <div
        onClick={handleOpenClick}
        className="flex p-2 justify-between items-center cursor-pointer"
      >
        <div className="flex flex-row items-center justify-between ">
          {header}
        </div>
      </div>
      {isOpen && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
