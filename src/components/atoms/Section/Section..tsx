import { StyledSection, InnerDiv } from "./Section.styles";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Section = ({ children, className, ...rest }: SectionProps) => {
  return (
    <StyledSection className={className} {...rest}>
      <InnerDiv>{children}</InnerDiv>
    </StyledSection>
  );
};

export default Section;
