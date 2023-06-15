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
  h?: string;
  cursor?: string;
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
}
export interface IMyCompanyCard {
  companyLogo: string;
  rating: string;
  companyName: string;
  tags: string[];
  companyDesc: string;
  fullDetailLink: string;
  viewJobs: string;
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
  onChange?: any; 
  value?: string;
  name?: string;
  pr?: string;
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
  [key: string]: any;
}

export interface IMyIconProps {
  color?: string;
  width?: string;
  height?: string;
  strokeWidth?: string;
  name: IconNameType | string;
  [key: string]: any;
}

export interface IMainHeadingProps {
  title: string;
  subTitle?: string;
  align?: any;
  headColor?: string;
  paraColor?: string;
  fontsize?: { base: string; md: string } | any;
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

export interface IMyArticleCard {
  image: string
  category: string
  heading: string
  paragraph: string
  readMore: string
  date: string
}
