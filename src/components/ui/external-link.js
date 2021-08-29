const ExternalLink = ({children, href}) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

export default ExternalLink;
