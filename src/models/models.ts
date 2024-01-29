export type DisplayMode = "Officielles" | "Fractionnés" | "Intermédiaires";

export const enum DistanceIntermediairesEnum {
  "1000M" = "1000 m",
  "1500M" = "1500 m",
  "2000M" = "2000 m",
  "3000M" = "3000 m",
  "5000M" = "5000 m",
  "10KM" = "10 Km",
  "15KM" = "15 Km",
  "20KM" = "20 Km",
  "SEMI" = "Semi-marathon",
  "30KM" = "30 Km",
  "MARATHON" = "Marathon",
  "50KM" = "50 Km",
  "100KM" = "100 Km",
}

export type distanceType = DistanceIntermediairesEnum;

export interface NameToDistance {
  label: string;
  distance: number;
}

export const dataDistance: Record<DistanceIntermediairesEnum, NameToDistance> =
  {
    [DistanceIntermediairesEnum["1000M"]]: {
      label: DistanceIntermediairesEnum["1000M"],
      distance: 1000,
    },
    [DistanceIntermediairesEnum["1500M"]]: {
      label: DistanceIntermediairesEnum["1500M"],
      distance: 1500,
    },
    [DistanceIntermediairesEnum["2000M"]]: {
      label: DistanceIntermediairesEnum["2000M"],
      distance: 2000,
    },
    [DistanceIntermediairesEnum["3000M"]]: {
      label: DistanceIntermediairesEnum["3000M"],
      distance: 3000,
    },
    [DistanceIntermediairesEnum["5000M"]]: {
      label: DistanceIntermediairesEnum["5000M"],
      distance: 5000,
    },
    [DistanceIntermediairesEnum["10KM"]]: {
      label: DistanceIntermediairesEnum["10KM"],
      distance: 10000,
    },
    [DistanceIntermediairesEnum["15KM"]]: {
      label: DistanceIntermediairesEnum["15KM"],
      distance: 15000,
    },
    [DistanceIntermediairesEnum["20KM"]]: {
      label: DistanceIntermediairesEnum["20KM"],
      distance: 20000,
    },
    [DistanceIntermediairesEnum["SEMI"]]: {
      label: DistanceIntermediairesEnum["SEMI"],
      distance: 21097.5,
    },
    [DistanceIntermediairesEnum["30KM"]]: {
      label: DistanceIntermediairesEnum["30KM"],
      distance: 30000,
    },
    [DistanceIntermediairesEnum["MARATHON"]]: {
      label: DistanceIntermediairesEnum["MARATHON"],
      distance: 42195,
    },
    [DistanceIntermediairesEnum["50KM"]]: {
      label: DistanceIntermediairesEnum["50KM"],
      distance: 50000,
    },
    [DistanceIntermediairesEnum["100KM"]]: {
      label: DistanceIntermediairesEnum["100KM"],
      distance: 100000,
    },
  };
