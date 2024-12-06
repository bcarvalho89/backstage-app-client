import { useState } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import cx from 'clsx';
import { Box, Collapse, Group, ThemeIcon, UnstyledButton } from '@mantine/core';
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

  return (
    <>
      <UnstyledButton
        onClick={() => !isSingleItem && setOpened((o) => !o)}
        className={cx(classes.control, { [classes.active]: opened })}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">
              {isSingleItem ? <InternalLink to={links[0].link}>{label}</InternalLink> : label}
            </Box>
          </Box>
          {!isSingleItem && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              size={16}
              style={{ transform: opened ? 'rotate(-90deg)' : 'none' }}
            />
          )}
        </Group>
      </UnstyledButton>
      {!isSingleItem ? <Collapse in={opened}>{items}</Collapse> : null}
      {showDivisor && <div className={classes.divisor} />}
    </>
  );
}
