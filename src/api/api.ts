
export interface Space {
    id: number;
    name: string;
    type: string;
    size: number;
    location: string;
    monthlyRent: number;
    potentialSavings?: string;
  }

export const mockMarketRateData: Record<string, number> = {
    Office: 2000,
    Storage: 1000,
    Warehouse: 1500,
  };

export const mockListings: Space[] = [
  {
    id: 1,
    name: "ShareRight Listing 1",
    type: "Office",
    size: 1200,
    location: "Hougang",
    monthlyRent: 1800,
  },
  {
    id: 2,
    name: "ShareRight Listing 2",
    type: "Storage",
    size: 800,
    location: "Singapore",
    monthlyRent: 900,
  },
  {
    id: 3,
    name: "ShareRight Listing 3",
    type: "Warehouse",
    size: 1200,
    location: "Yishun",
    monthlyRent: 1200,
  },
  {
    id: 4,
    name: "ShareRight Listing 4",
    type: "Storage",
    size: 800,
    location: "Clementi",
    monthlyRent: 750,
  },
  {
    id: 5,
    name: "ShareRight Listing 5",
    type: "Warehouse",
    size: 1200,
    location: "Sembawang",
    monthlyRent: 1100,
  },
  {
    id: 6,
    name: "ShareRight Listing 6",
    type: "Office",
    size: 800,
    location: "Tampines",
    monthlyRent: 1450,
  },
  {
    id: 7,
    name: "ShareRight Listing 7",
    type: "Office",
    size: 1200,
    location: "Queenstown",
    monthlyRent: 1750,
  },
  {
    id: 8,
    name: "ShareRight Listing 8",
    type: "Warehouse",
    size: 800,
    location: "Pasir Ris",
    monthlyRent: 1020,
  },
  {
    id: 9,
    name: "ShareRight Listing 9",
    type: "Storage",
    size: 800,
    location: "Bukit Batok",
    monthlyRent: 740,
  },
];
