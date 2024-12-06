import { IconAward, IconCalendarEvent, IconGauge, IconMusic, IconUser } from '@tabler/icons-react';
import { ScrollArea } from '@mantine/core';
import { SidebarLinksGroup, SidebarLinksGroupProps } from './SidebarLinksGroup/SidebarLinksGroup';
import classes from './Sidebar.module.css';

const menuItems: SidebarLinksGroupProps[] = [
  { label: 'Dashboard', icon: IconGauge, links: [{ label: 'Dashboard', link: '/' }] },
  {
    label: 'Bandas',
    icon: IconMusic,
    links: [{ label: 'Bandas', link: '/bands' }],
  },
  {
    label: 'Apresentações',
    icon: IconCalendarEvent,
    links: [{ label: 'Apresentações', link: '/shows' }],
  },
  {
    label: 'Pesquisas de Satisfação',
    icon: IconAward,
    links: [{ label: 'Pesquisas de Satisfação', link: '/surveys' }],
    showDivisor: true,
  },
  {
    label: 'Usuários',
    icon: IconUser,
    links: [{ label: 'Usuários', link: '/users' }],
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
