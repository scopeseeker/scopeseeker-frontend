import { IconNameType } from '@/constant/IconLibrary';
import React, { ReactNode } from 'react';

export interface IMyBadge {
  color?: string;
  key?: any;
  labelArray: string[];
}

export interface IMyButtonProps {
  title: string;
  borderRadius?: string;
  variant?: 'outline' | 'solid';
  px?: string;
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
  w?: any;
  [key: string] : any;
}
export interface IMainHeadingProps {
  title: string;
  subTitle?: string;
  align?: any;
  headColor?: string;
  paraColor?: string;
  fontsize?: { base: string; md: string };
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
  as: 'span' | 'small' | 'heading' | 'link' | 'title' | 'p';
  color?: string;
  href?: string;
  fontWeight?: number;
  fontSize?:
    | { base: string; md: string }
    | { base: string; md: string; '2xl': string };
  [key: string]: any;
}
