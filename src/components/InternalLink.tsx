import { PropsWithChildren } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

type InternalLinkProps = PropsWithChildren & NavLinkProps & React.RefAttributes<HTMLAnchorElement>;

export default function InternalLink(props: InternalLinkProps) {
  const { children, ...otherProps } = props;

  return (
    <NavLink style={{ textDecoration: 'none' }} {...otherProps}>
      {children}
    </NavLink>
  );
}
