import { createElement } from "react";

type SectionHeaderProps = {
  headerText: string;
  headingTag: "h1" | "h2" | "h3";
};

const SectionHeader = ({ headerText, headingTag }: SectionHeaderProps) => {
  const Heading = createElement(headingTag, null, headerText);
  return (
    <div className="section-header prose lg:prose-xl py-12 w-full max-w-none!">
      <span className="w-20 h-2 bg-foreground mb-12 block"></span>
      {Heading}
    </div>
  );
};

export default SectionHeader;
