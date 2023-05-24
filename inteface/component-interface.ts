import { IconNameType } from '@/constant/IconLibrary';
import React, { ReactNode } from 'react';

export interface IMyBadge {
  color?: string;
  key?: any;
  labelArray: string[];
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
  jobType: string[];
  companyDesc: string;
  applyLink?: string;
  fullDetailedLink?: string;
  isNamedLogo?: boolean;
}

export interface IFilter {
  FilterObject: any[];
}

export interface IMyInputProps {
  placeholder: string;
  leftElement: React.ReactNode;
  rightElement?: React.ReactNode;
  type: string;
  labelTitle?: string;
  [key: string]: any;
}


export interface IWhyBox {
  bg: string;
  color: string;
  cardNumber: number;
  cardText: string;
  iconName?: IconNameType;
}

export interface ILayoutProps {
  children: ReactNode;
  py?: { base: string; md: string };
}
export interface IMainHeadingProps {
  title: string;
  subTitle?: string;
  align?: any;
  headColor?: string;
  paraColor?: string;
  fontsize?: { base: string, md: string };
  [key: string]: any;

}
export interface IPageHeroSection {
  title: string;
  subtitle: string;
  align?: string;
  headColor?: string;
  paraColor?: string;
  alt: string;
  w?: number;
  h?: number;
  src: string;
}

export interface IMyText {
  title: string;
  as: string;
  color?: string;
  href?: string;
  fontWeight?: number;
  hoverColor?: string;
  fontSize?: { base: string; md: string };
  [key: string]: any;
}
