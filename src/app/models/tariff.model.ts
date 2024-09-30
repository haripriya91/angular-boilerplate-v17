export interface Tariff {
    id: number;
    name: string;
    downloadSpeed: number;  // Download speed in Mbps
    uploadSpeed: number;    // Upload speed in Mbps
    benefits : string[];
    price: number;          // Price in Euros
  }