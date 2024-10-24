import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

type ExpandablePanelProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

function ExpandablePanel({ header, children }: ExpandablePanelProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleOpenClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 border rounded">
      <div
        onClick={handleOpenClick}
        className="flex justify-between items-center cursor-pointer"
      >
        <div className="flex flex-row items-center justify-between ">
          {header}
        </div>
        {expanded ? <GoChevronDown /> : <GoChevronLeft />}
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
