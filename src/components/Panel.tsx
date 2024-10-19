import classNames from "classnames";

type PanelProps = Partial<{
  children: React.ReactNode;
  className: string;
  [key: string]: React.ComponentProps<any>;
}>;

function Panel({ children, className, ...rest }: PanelProps) {
  const constantClasses: string = "border rounded p-2 shadow bg-white w-full";

  const finalClassName: string = className
    ? classNames(constantClasses, className)
    : constantClasses;

  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  );
}

export default Panel;
