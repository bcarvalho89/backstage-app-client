import { IconAward, IconCalendarEvent, IconGauge, IconMusic, IconUser } from '@tabler/icons-react';
import { Box, ScrollArea } from '@mantine/core';
import {
  NavigationLinksGroup,
  NavigationLinksGroupProps,
} from './NavigationLinksGroup/NavigationLinksGroup';
import classes from './Navigation.module.css';

const menuItems: NavigationLinksGroupProps[] = [
  { label: 'Dashboard', icon: IconGauge, link: '/' },
  {
    label: 'Minha Banda',
    icon: IconMusic,
    link: '/my-band',
  },
  {
    label: 'Apresentações',
    icon: IconCalendarEvent,
    link: '/shows',
  },
  {
    label: 'Pesquisas de Satisfação',
    icon: IconAward,
    link: '/surveys',
    showDivisor: true,
  },
  {
    label: 'Usuários',
    icon: IconUser,
    link: '/users',
  },
];

export default function Navigation() {
  const links = menuItems.map((item) => <NavigationLinksGroup {...item} key={item.label} />);

  return (
    <ScrollArea className={classes.links}>
      <Box className={classes.linksInner}>{links}</Box>
    </ScrollArea>
  );
}
