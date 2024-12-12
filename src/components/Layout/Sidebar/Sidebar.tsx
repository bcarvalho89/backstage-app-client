import { IconAward, IconCalendarEvent, IconGauge, IconMusic, IconUser } from '@tabler/icons-react';
import { ScrollArea } from '@mantine/core';
import { SidebarLinksGroup, SidebarLinksGroupProps } from './SidebarLinksGroup/SidebarLinksGroup';
import classes from './Sidebar.module.css';

const menuItems: SidebarLinksGroupProps[] = [
  { label: 'Dashboard', icon: IconGauge, link: '/' },
  {
    label: 'Bandas',
    icon: IconMusic,
    link: '/bands',
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

export default function Sidebar() {
  const links = menuItems.map((item) => <SidebarLinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  );
}
