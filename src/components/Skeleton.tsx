import classNames from "classnames";

type SkeletonProps = {
  times: number;
  className: string;
  gap?: number;
  isRow?: boolean;
};

function Skeleton({ times, className, gap = 0, isRow = false }: SkeletonProps) {
  const outerClassNames = classNames(`flex`, {
    "flex-row": isRow,
    "flex-col": !isRow,
  });

  const middleClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  );
  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );

  const renderedSkeleton = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={middleClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });
  return (
    <div style={{ gap: `${gap}rem` }} className={outerClassNames}>
      {renderedSkeleton}
    </div>
  );
}

export default Skeleton;
