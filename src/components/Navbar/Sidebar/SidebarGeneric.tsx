import ClosingX from "./../SVG/ClosingX/ClosingX";

interface SidebarI {
  fnClick?: () => void;
  state?: React.ComponentState;
  sidebarOpenStyling?: string;
  sidebarCloseStyling?: string;
}

export default function Sidebar({
  state,
  fnClick,
  sidebarOpenStyling,
}: SidebarI): JSX.Element {
  return (
    <div
      className={`${
        !state
          ? "absolute top-0 right-0 h-96 w-0 overflow-x-hidden transform-gpu transition-all duration-500 lg:hidden"
          : sidebarOpenStyling
      }`}
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
