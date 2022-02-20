import { StyledParagraph } from "./Paragraph.styles";

interface ParaProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Paragraph = ({ children, className, ...rest }: ParaProps) => {
  return (
    <StyledParagraph className={className} {...rest}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
