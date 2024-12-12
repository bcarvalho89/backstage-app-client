import { useState } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import cx from 'clsx';
import { Collapse, Group, ThemeIcon, UnstyledButton } from '@mantine/core';
import InternalLink from '@/components/InternalLink';
import classes from './SidebarLinksGroup.module.css';

interface SidebarLinkProps {
  label: string;
  link: string;
}

export interface SidebarLinksGroupProps {
  icon: React.FC<any>;
  label: string;
  links: SidebarLinkProps[];
  showDivisor?: boolean;
}

export function SidebarLinksGroup(props: SidebarLinksGroupProps) {
  const { icon: Icon, label, links, showDivisor } = props;
  const [opened, setOpened] = useState(false);

  const isSingleItem = links.length === 1;

  const items = links.map((link) => (
    <InternalLink to={link.link} key={link.label} className={classes.link}>
      {link.label}
    </InternalLink>
  ));

  if (isSingleItem) {
    return (
      <>
        <InternalLink className={cx(classes.control)} to={links[0].link}>
          <ThemeIcon variant="light" size={30} mr="md">
            <Icon size={18} />
          </ThemeIcon>
          <span>{label}</span>
        </InternalLink>
        {showDivisor && <div className={classes.divisor} />}
      </>
    );
  }

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
