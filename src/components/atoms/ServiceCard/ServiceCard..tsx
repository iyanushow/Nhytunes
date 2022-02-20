import {
  Content,
  StyledDiv,
  StyledHeading,
  StyledImageAnchor,
  StyledInner,
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

const ServiceCard = ({ className, imageUrl, content, heading, ...rest }: ServiceProps) => {
  return (
    <StyledDiv className={className}>
      <StyledInner>
        <StyledImageAnchor imageUrl={imageUrl} width={58} height={58} />

        <StyledHeading level="h4" color="primary">
          {heading}
        </StyledHeading>

        <Content>{content}</Content>
      </StyledInner>
    </StyledDiv>
  );
};

export default ServiceCard;
