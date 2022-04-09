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
    title: "Off-hire surveys ",
    imageUrl: "/images/projects/offhire_survey.jpg",
  },
  {
    id: 2,
    title: "Pipeline inspection at Dangote Refinary",
    imageUrl: "/images/projects/dangote.jpg",
  },
  {
    id: 3,
    title: "Inspection for Pipeline Pigging",
    imageUrl: "/images/projects/pipeline_pigging.jpg",
  },
  { id: 4, title: "Drydocking attendance", imageUrl: "/images/projects/drydocking.jpg" },
  {
    id: 5,
    title: "Pre- Purchase Inspection on 7000mt self propelled barge from Ghana",
    imageUrl: "/images/projects/purchase_inspection.jpg",
  },
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

export const serviceList = [
  {
    id: 1,
    title: "Vessel Chartering and Brokerage.",
    imageOne:
      "https://res.cloudinary.com/di7pnx5q2/image/upload/w_auto,f_auto,q_auto:good/v1649500204/nhytunes/services/vessel_charter_big.jpg",
    contentOne: `<p>With partners in Europe and Asia, we offer international vessel sales and purchase for clients, this activity is handled by our professional brokers.   Our commercial department is staffed by a highly qualified team of international in-house brokers with extensive experience in all of the market sectors in which NNL is active. Their expertise stretches across specialized construction vessels, bulk carriers, chemical and product tankers and offshore supply vessels. Our dedicated team of professionals with vast experience in the ship chartering industry can handle the following services: </p>
        <ul>
          <li>Vessel chartering services </li>
          <li>Vessel valuation services </li>
          <li> Provide complete technical findings and reports</li>
          <li>Ship Sale & Purchase - Vessel brokering services to ensure you get the vessel that suits your requirements </li>
    
          </ul>
      
      `,
    contentTwo: `
    <div>
  
    </div>  
    `,
  },

  {
    id: 2,
    title: "Marine and Offshores Units Surveys  ",
    imageOne:
      "https://res.cloudinary.com/di7pnx5q2/image/upload/w_auto,f_auto,q_auto:good/v1649500204/nhytunes/services/offshore_unit_big.jpg",
    contentOne: `
      <div>
      NNL carries out a wide range of Marine and Offshore units. Survey which includes the following:

      <ul>
        <li>Marine Surveys</li>
        <li>Warranty surveys</li>
        <li>
        On and Off Hire Surveys: Vessel’s verification before and after hire period to assess the status of the vessel in detail with photos and evidence
        </li>
         <li>
          Pre-purchase Surveys: Detailed inspection of vessels for prospective buyers and detailed reporting with photographs, documents etc.
        </li>

        <li>
        Third party surveys (P&I Club, insurance, charterer)
        </li>

        <li>
        Suitability Survey for heavy marine lift transportation
        </li>

        <li>
        Marine Towage and Rig Moves
        </li>

        <li>
          Underwater surveys 
        </li>

        <li>
          Offshore unit reactivation surveys
        </li>

        <li>
          Offshore unit in service operator’s procedural audit  Internal International Ship and Port Facility Security (ISPS) Audits and International Safety Management (ISM) consultancy. 
        </li>
      </ul>

      <div>
      <p>All types of condition assessment surveys for Insurers, as per request</p>

      <ul>
        <li>
            Specific inspections and reporting for vessel’s suitability to projects, operations, demolition voyages etc.
          </li>

          <li>
            Draft Surveys: Draft surveys for assessment of Cargo, Light weight
          </li>

          <li>
            Damage Surveys: Damage assessment surveys for Recognized organizations, Other authorities and Owners
          </li>

          <li>
            Bunker surveys to assess quantity of Bunker on board
          </li>

          <li>
            Towage approval surveys for assessment of Towage
          </li>
      </ul>
      </div>
        
      </div>
    
    `,

    contentTwo: `
    <div>

     

     
     <div>

  
    `,
  },

  {
    id: 3,
    title: "Vessel 	Management",
    imageOne:
      "https://res.cloudinary.com/di7pnx5q2/image/upload/w_auto,f_auto,q_auto:good/v1649500204/nhytunes/services/vessel_mgt_big.jpg",
    contentOne: `<p>NNL is a world class maritime service provider. We provide commercial, technical and marine superintendent services for a wide range of vessel types. Our superintendents also oversee and supervise new building constructions, conversion, dry dockings and repair projects with superintendents on-site to ensure that all work is completed to the highest standards and specifications. </p>
      <p> We work with first class suppliers and service providers around the world to provide a full range of expert ship management services. Using a combination of in-house technical management and third-party managers, our engineering specialists oversee the careful maintenance and day-to-day running of ships amid today’s increasingly complex regulatory parameters, including the International Safety Management Code (ISM), Flag State, Port State control and Classification Society rules.</p>
      
       <div>

     <h5>
     Our vessel management activities include:
     </h5>

     <ul>
     <li>Management of Company’s ISM/ISPS internal Audit system </li>
     <li>Development and implementation of SMS/SSP/PMS system</li>
     <li>Dry-docking and project management </li>
     <li>Ship repairs/conversion project management </li>
     <li>Implementation and management of Planned maintenance system </li>
     <li>Technical services and supplies of spare parts</li>
     <li>Vessel registration and documentation</li>
     <li>Marine documentation and procedures.</li>
     </ul>
     </div>
      
      `,
    contentTwo: `
    <div>
     
    
    </div>  
    `,
  },

  {
    id: 4,
    title: "Oil and Gas services",
    imageOne:
      "https://res.cloudinary.com/di7pnx5q2/image/upload/w_auto,f_auto,q_auto:good/v1649500204/nhytunes/services/oilgas_big.jpg",
    contentOne: `
      <div>
      
      NNL offer unmatchable professional services to the oil and gas industry, with our local and foreign strategic partners, we carry out turkey -
        <ul>
          <li>Rigging/loose lifting equipment inspection and Nondestructive services </li>
          <li>Structural integrity and life span evaluation test</li>
           <li>Load test/ frictional test </li>
     <li>Welding and fabrication  </li>
     <li>Blasting and Painting  </li>
     <li>Pipeline inspection and pigging services  </li>
      <li>Industrial cleaning and waste management </li>
      <li>Procurement and Supplies </li>
      <li>Facility management </li>
      <li>Supply of specialized labor</li>
      <li>Underwater Engineering, subsea inspection and support </li>
        </ul>
      </div>
    `,
    contentTwo: `
    <div>
      <ul>
    



 
     </ul>
    </div>  
    `,
  },

  {
    id: 5,
    title: "Marine and Offshore Supplies",
    imageOne:
      "https://res.cloudinary.com/di7pnx5q2/image/upload/w_auto,f_auto,q_auto:good/v1649500204/nhytunes/services/offshore_supplies_big.jpg",
    contentOne: `<p>NNL provides other services, such as general supplies, supplies of petroleum products, provision and supplies of industrial rag, 
provision and supplies of trucks spares parts, sales and purchase of scrap metal, general merchants etc.</p>

<div>
     The following services for marine and offshore supplies include:   Safety equipment supplies

     <ul>
     <li>Bunker Supplies</li>
     <li>Fresh water supplies</li>
     <li>Spares and equipment supplies  </li>
     <li>Safety equipment supplies</li>
     </ul>
    </div>  
`,
    contentTwo: `
    <div>
   
    </div>  
    `,
  },
];
