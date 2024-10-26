import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

type ExpandablePanelProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  color?: string;
};

function ExpandablePanel({
  header,
  children,
  color = "",
}: ExpandablePanelProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleOpenClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={"mb-2 border rounded " + color}>
      <div
        onClick={handleOpenClick}
        className="flex justify-between items-center cursor-pointer mr-6"
      >
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        {expanded ? <GoChevronDown /> : <GoChevronLeft />}
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
