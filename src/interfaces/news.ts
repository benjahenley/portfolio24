export interface NewsItem {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: MetaData;
  categories: number[];
  tags: any[];
  _links: Links;
  _embedded: Embedded;
}

interface Guid {
  rendered: string;
}

interface Title {
  rendered: string;
}

interface Content {
  rendered: string;
  protected: boolean;
}

interface Excerpt {
  rendered: string;
  protected: boolean;
}

interface MetaData {
  footnotes: string;
}

interface Links {
  self: Link[];
  collection: Link[];
  about: Link[];
  author: Link[];
  replies: Link[];
  version_history: Link[];
  predecessor_version: Version[];
  wp_featuredmedia: Link[];
  wp_attachment: Link[];
  wp_term: WpTerm[];
  curies: Cury[];
}

interface Link {
  href: string;
  embeddable?: boolean;
}

interface Version {
  id: number;
  href: string;
}

interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

interface Embedded {
  author: Author[];
  replies: Reply[];
  "wp:featuredmedia": FeaturedMedia[];
  wp_term: WpTerm[][];
}

interface Author {
  code: string;
  message: string;
  data: {
    status: number;
  };
}

interface Reply {
  code: string;
  message: string;
  data: {
    status: number;
  };
}

interface FeaturedMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: Title;
  author: number;
  caption: Caption;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  source_url: string;
  _links: {
    self: Link[];
    collection: Link[];
    about: Link[];
    author: Link[];
  };
}

interface Caption {
  rendered: string;
}

interface MediaDetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: Sizes;
  image_meta: ImageMeta;
}

interface Sizes {
  medium: Size;
  large: Size;
  thumbnail: Size;
  medium_large: Size;
  "1536x1536": Size;
  "2048x2048": Size;
  "hitmag-landscape": Size;
  "hitmag-featured": Size;
  "hitmag-grid": Size;
  "hitmag-list": Size;
  "hitmag-thumbnail": Size;
  full: Size;
}

interface Size {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
}

interface ImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}
