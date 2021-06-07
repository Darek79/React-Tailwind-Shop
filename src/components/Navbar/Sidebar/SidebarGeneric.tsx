import ClosingX from "./../SVG/ClosingX/ClosingX";

interface SidebarI {
  fnClick?: () => void;
  state?: React.ComponentState;
}

export default function Sidebar({
  state,
  fnClick,
}: SidebarI): JSX.Element {
  return (
    <div
      className={
        !state
          ? "absolute top-0 right-0 bg-dark h-96 w-full transform-gpu transition-all duration-300 opacity-0 translate-x-full z-10 lg:hidden"
          : "absolute top-0 right-0 bg-light border-2 h-96 w-full transform-gpu transition-all duration-300 opacity-100 translate-x-0"
      }
    >
      <div className="w-full flex justify-end pr-2 pt-2">
        <ClosingX
          svg_class="w-8 h-8"
          strokeWidth="3"
          stroke="#0f181a"
          fnClick={fnClick}
        />
      </div>
      test
    </div>
  );
}
