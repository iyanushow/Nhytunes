import {
  Content,
  StyledDiv,
  StyledHeading,
  StyledImageAnchor,
  StyledInner,
  StyledLink,
} from "./ServiceCard.styles";

export interface IService {
  id: number;
  heading: string;
  imageUrl: string;
  content: string;
}

interface ServiceProps extends IService {
  className?: string;
}

const ServiceCard = ({ id, className, imageUrl, content, heading, ...rest }: ServiceProps) => {
  return (
    <StyledLink to={`/services/${id}`}>
      <StyledDiv className={className}>
        <StyledInner>
          <StyledImageAnchor imageUrl={imageUrl} width={58} height={58} />

          <StyledHeading level="h4" color="primary">
            {heading}
          </StyledHeading>

          <Content>{content}</Content>
        </StyledInner>
      </StyledDiv>
    </StyledLink>
  );
};

export default ServiceCard;
