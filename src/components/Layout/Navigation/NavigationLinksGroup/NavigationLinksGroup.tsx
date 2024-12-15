import { useState } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import cx from 'clsx';
import { Collapse, Group, ThemeIcon, UnstyledButton } from '@mantine/core';
import InternalLink from '@/components/InternalLink';
import classes from './NavigationLinksGroup.module.css';

interface NavigationLinkProps {
  label: string;
  link: string;
}

export interface NavigationLinksGroupProps extends NavigationLinkProps {
  icon: React.FC<any>;
  submenu?: NavigationLinkProps[];
  showDivisor?: boolean;
}

export function NavigationLinksGroup(props: NavigationLinksGroupProps) {
  const { icon: Icon, label, submenu, showDivisor, link } = props;
  const [opened, setOpened] = useState(false);

  if (!submenu) {
    return (
      <>
        <InternalLink
          className={({ isActive }) => {
            return cx(classes.control, {
              [classes.active]: isActive,
            });
          }}
          to={link}
        >
          <ThemeIcon variant="light" size={30} mr="md">
            <Icon size={18} />
          </ThemeIcon>
          <span>{label}</span>
        </InternalLink>
        {showDivisor && <div className={classes.divisor} />}
      </>
    );
  }

  const items = submenu.map((link) => (
    <InternalLink to={link.link} key={link.label} className={classes.link}>
      {link.label}
    </InternalLink>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={cx(classes.control, { [classes.active]: opened })}
      >
        <Group justify="space-between" gap={0} style={{ width: '100%' }}>
          <ThemeIcon variant="light" size={30} mr="md">
            <Icon size={18} />
          </ThemeIcon>
          <span>{label}</span>
          <IconChevronRight
            className={classes.chevron}
            stroke={1.5}
            size={16}
            style={{ transform: opened ? 'rotate(-90deg)' : 'none' }}
          />
        </Group>
      </UnstyledButton>
      <Collapse in={opened}>{items}</Collapse>
      {showDivisor && <div className={classes.divisor} />}
    </>
  );
}
