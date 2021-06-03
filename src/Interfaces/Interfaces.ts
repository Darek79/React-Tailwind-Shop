export interface CompClasses {
  class_svg_default?: string;
  other_svg_classes?: string[];
}

export interface SVG {
  strokeWidth?: string;
  fill?: string;
  stroke?: string;
  line_class?: string;
  svg_class?: string;
  wrapper_class?: string;
  fnClick?: () => void;
}

export interface Generic {
  default_style?: string;
  custom_style?: string;
  parent_style?: string;
  child_style?: string;
  children?: React.ReactNode;
  path?: string;
  content?: string;
  fnClick?: () => void;
  state?: any;
}
