import { IconAward, IconCalendarEvent, IconGauge, IconMusic, IconUser } from '@tabler/icons-react';
import { useFeatureFlagEnabled } from 'posthog-js/react';
import { Box, ScrollArea } from '@mantine/core';
import {
  NavigationLinksGroup,
  NavigationLinksGroupProps,
} from './NavigationLinksGroup/NavigationLinksGroup';
import classes from './Navigation.module.css';

export default function Navigation() {
  const isSurveysEnabled = useFeatureFlagEnabled('surveys');

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
      showDivisor: !isSurveysEnabled,
    },
    {
      label: 'Pesquisas de Satisfação',
      icon: IconAward,
      link: '/surveys',
      showDivisor: true,
      disabled: !isSurveysEnabled,
    },
    {
      label: 'Usuários',
      icon: IconUser,
      link: '/users',
    },
  ];
  const links = menuItems.map((item) => <NavigationLinksGroup {...item} key={item.label} />);

  return (
    <ScrollArea className={classes.links}>
      <Box className={classes.linksInner}>{links}</Box>
    </ScrollArea>
  );
}
