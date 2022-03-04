import { useState } from "react";
import {
  Content,
  ContentBox,
  DataGrid,
  StyledImage,
  ThumbContainer,
  ThumbDiv,
  ThumbGrid,
  ThumbImage,
  ThumbTitle,
  Title,
  Wrapper,
} from "./ServicesGrid.styles";

const serviceList = [
  {
    id: 1,
    title: "Vessel Chartering and Brokerage.",
    imageOne: "/images/projects/singles/vessel_charter_one.jpeg",
    imageTwo: "/images/projects/singles/vessel_charter_two.jpeg",
    contentOne:
      "<p>With partners in Europe and Asia, we offer international vessel sales and purchase for clients, this activity is handled by our professional brokers.   Our commercial department is staffed by a highly qualified team of international in-house brokers with extensive experience in all of the market sectors in which NNL is active. </p>",
    contentTwo: `
    <div>
     <p>Their expertise stretches across specialized construction vessels, bulk carriers, chemical and product tankers and offshore supply vessels. Our dedicated team of professionals with vast experience in the ship chartering industry can handle the following services:</p>
    

     
     <ul>
     <li>Vessel chartering services </li>
     <li>Vessel valuation services </li>
     <li> Provide complete technical findings and reports</li>
     <li>Ship Sale & Purchase - Vessel brokering services to ensure you get the vessel that suits your requirements </li>
    
     </ul>
     </div>
    </div>  
    `,
  },

  {
    id: 2,
    title: "Marine and Offshores Units Surveys  ",
    imageOne: "/images/projects/singles/offshore_one.jpg",
    imageTwo: "/images/projects/singles/offshore_two.jpg",
    contentOne: `
      <div>
      NNL carries out a wide range of Marine and Offshore units. Survey which includes the following:

      <ul>
        <li>Marine Surveys</li>
        <li>Warranty surveys</li>
        <li>
        On and Off Hire Surveys: Vessel’s verification before and after hire period to assess the status of the vessel in detail with photos and evidence
        </li>
      </ul>
        
      </div>
    
    `,

    contentTwo: `
    <div>

      <ul>
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
     <div>

  
    `,
  },

  {
    id: 3,
    title: "Vessel 	Management",
    imageOne: "/images/projects/singles/vessel_mgt_one.jpg",
    imageTwo: "/images/projects/singles/vessel_mgt_two.jpg",
    contentOne:
      "<p>NNL is a world class maritime service provider. We provide commercial, technical and marine superintendent services for a wide range of vessel types. Our superintendents also oversee and supervise new building constructions, conversion, dry dockings and repair projects with superintendents on-site to ensure that all work is completed to the highest standards and specifications. </p>",
    contentTwo: `
    <div>
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
    </div>  
    `,
  },

  {
    id: 4,
    title: "Oil and Gas services",
    imageOne: "/images/projects/singles/oil_gas_one.jpg",
    imageTwo: "/images/projects/singles/oil_gas_two.jpg",
    contentOne: `
      <div>
      
      NNL offer unmatchable professional services to the oil and gas industry, with our local and foreign strategic partners, we carry out turkey -
        <ul>
          <li>Rigging/loose lifting equipment inspection and Nondestructive services </li>
          <li>Structural integrity and life span evaluation test</li>
        </ul>
      </div>
    `,
    contentTwo: `
    <div>
      <ul>
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
  },

  {
    id: 5,
    title: "Marine and Offshore Supplies",
    imageOne: "/images/projects/singles/supplies_one.jpg",
    imageTwo: "/images/projects/singles/supplies_two.jpg",
    contentOne: `<p>NNL provides other services, such as general supplies, supplies of petroleum products, provision and supplies of industrial rag, 
provision and supplies of trucks spares parts, sales and purchase of scrap metal, general merchants etc.</p>`,
    contentTwo: `
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
  },
];

const ServicesGrid = ({ initialService = 1 }: { initialService: number }) => {
  const [services] = useState(serviceList);

  const [selectedService, setSelectedService] = useState(
    services.find(service => service.id === initialService) || services[0]
  );

  return (
    <Wrapper>
      <DataGrid>
        <Title level="h1" color="primary">
          {selectedService.title}
        </Title>

        <ContentBox>
          <StyledImage imageUrl={selectedService.imageOne} />
          <Content dangerouslySetInnerHTML={{ __html: selectedService.contentOne }} />
          <StyledImage imageUrl={selectedService.imageTwo} />
          <Content dangerouslySetInnerHTML={{ __html: selectedService.contentTwo }} />
        </ContentBox>
      </DataGrid>
      <ThumbGrid>
        <Title level="h1" color="primary">
          Other Services
        </Title>
        <ThumbContainer>
          {services
            .filter(service => service.id !== selectedService.id)
            .map(service => (
              <ThumbDiv key={service.id} onClick={() => setSelectedService(service)}>
                <ThumbImage imageUrl={service.imageOne} />
                <ThumbTitle level="h5" color="primary">
                  {service.title}
                </ThumbTitle>
              </ThumbDiv>
            ))}
        </ThumbContainer>
      </ThumbGrid>
    </Wrapper>
  );
};

export default ServicesGrid;
