export interface HazardReport {
  _id: string;
  title: string;
  description: string;
  hazardtype: string;
  city: string;
  country: string;
    latitude: number;
    longitude: number;
  images: string[];
  user?: {
    _id?: string;
    firstName?: string;
    lastName?: string;
    userName?: string;
  };
  createdAt: string;
  updatedAt: string;
}