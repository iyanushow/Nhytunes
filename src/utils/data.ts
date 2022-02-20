export type IProject = {
  id: number;
  imageUrl: string;
  title: string;
};

export type DataProps = {
  carouselData: {
    url: string;
    title: string;
  }[];
};

export const projects = [
  {
    id: 1,
    title: "Pipeline inspection at Dangote Refinary",
    imageUrl: "/images/projects/dangote.jpg",
  },
  {
    id: 2,
    title: "Inspection for Pipeline Pigging",
    imageUrl: "/images/projects/pipeline_pigging.jpg",
  },
  { id: 3, title: "Drydocking attendance", imageUrl: "/images/projects/drydocking.jpg" },
  {
    id: 4,
    title: "Pre- Purchase Inspection on 7000mt self propelled barge from Ghana",
    imageUrl: "/images/projects/purchase_inspection.jpg",
  },
  { id: 5, title: "Off-hire surveys ", imageUrl: "/images/projects/offhire_survey.jpg" },
  { id: 6, title: "Rudder work on AHT", imageUrl: "/images/projects/rudder.jpg" },
  {
    id: 7,
    title: "Broker for the purchase and delivery to Nigeria of 154AHT from Europe.",
    imageUrl: "/images/projects/broker.jpg",
  },
  { id: 8, title: "Bow thruster repairs", imageUrl: "/images/projects/bow_thruster.jpg" },
  {
    id: 9,
    title: "Prepurchase engine room inspection",
    imageUrl: "/images/projects/purchase_inspection.jpg",
  },
];

export const carouselSlides = [
  { url: "/images/services/vessel_charter.jpg", title: "Vessel Chartering and Brokerage" },
  { url: "/images/services/vessel_mgt.jpg", title: "Vessel Management" },
  { url: "/images/services/oil_gas.jpg", title: "Oil and Gas Services" },
  { url: "/images/services/marine_supplies.jpg", title: "Marine and Offshore Supplies" },
  { url: "/images/services/marine.jpg", title: "Marine and Offshores Units Surveys  " },
];
