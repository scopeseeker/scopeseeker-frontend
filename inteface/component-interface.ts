export interface IMyBadge {
  color?: string;
  key?: any;
  label: string;
}

export interface IMyButtonProps {
  title: string;
  borderRadius?: number;
  fontSize?: { base: string; md: string } | string;
  color?: string;
  bg?: string;
  size?: string;
  variant?: string;
  colorScheme?: string;
  decoration?: string;
  px?: number | string;
  w?: string;
  mt?: number;
  fontWeight?: string;
  [key: string]: any;
}

export interface IMyJobCard {
  companyIconLogo: string;
  role: string;
  companyName: string;
  location: string;
  jobType: { label: string; value: string; color: string }[];
  companyDesc: string;
  applyLink?: string;
  fullDetailedLink?: string;
  isNamedLogo?: boolean;
}

export interface IFilter {
  FilterObject: any[];
}

export interface IMyInputProps {
  inputFontSize?: string;
  labelFontSize?: string;
  labelTitle?: string;
  placeholder?: string;
  size?: string;
  type: string;
  mt?: number;
  leftElem?: React.ReactNode;
  rightElem?: React.ReactNode;
  w?: number | string;
  bg?: string;
  hpr?: string | number;
  [key: string]: any;
}
