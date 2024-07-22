export interface ApiStrapiMenu {
  data: StrapiMenu[];
  meta: Meta;
};

export interface StrapiMenu {
  id:         number;
  attributes: Attributes;
};

interface Attributes {
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  locale:      string;
  from:        string;
  navbar:      Navbar[];
};

export interface Navbar {
  id:           number;
  label:        string;
  href:         string;
  mega_menu:    boolean;
  has_dropdown: boolean;
  isActive:     boolean;
  submenus:     Submenu[];
};

interface Submenu {
  id:         number;
  href:       string;
  label:      string;
  target:     null;
  isExternal: boolean;
  isActive:   boolean;
};

interface Meta {
  pagination: Pagination;
};

interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
};