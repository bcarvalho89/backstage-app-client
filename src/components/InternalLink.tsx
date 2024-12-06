import { PropsWithChildren } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

type InternalLinkProps = PropsWithChildren & NavLinkProps & React.RefAttributes<HTMLAnchorElement>;

export default function InternalLink(props: InternalLinkProps) {
  const { children, ...otherProps } = props;

  return (
    <NavLink {...otherProps} style={{ textDecoration: 'none', color: 'inherit' }}>
      {children}
    </NavLink>
  );
}
