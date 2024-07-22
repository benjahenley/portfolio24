export interface CommitteeDatum {
  data: Committee[];
  meta: any;
}
export interface Committee {
  id: number;
  attributes: CommitteeAttributes;
}

export interface CommitteeAttributes {
  fullName: string;
  charge: string;
  category: string;
  profession: null | string;
  linkedin: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  company: string;
  of: string;
  events: DataArray<Event>;
  image: Data<Image>;
  websites: DataArray<Website>;
}

interface Data<T> {
  data: T;
}

interface DataArray<T> {
  data: T[];
}

interface Event {
  // Define attributes of events if needed
}

interface Image {
  id: number;
  attributes: ImageAttributes;
}

interface ImageAttributes {
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: null | any; // Define the structure if known
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | any; // Define the structure if known
  createdAt: string;
  updatedAt: string;
}

interface Website {
  id: number;
  attributes: WebsiteAttributes;
}

interface WebsiteAttributes {
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
