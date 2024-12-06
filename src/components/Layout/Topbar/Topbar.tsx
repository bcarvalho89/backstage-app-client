import { useState } from 'react';
import { IconLogout, IconSettings } from '@tabler/icons-react';
import cx from 'clsx';
import { Avatar, Group, Menu, Text, UnstyledButton } from '@mantine/core';
import InternalLink from '@/components/InternalLink';
import Logo from '@/components/Logo/Logo';
import { useAuth } from '@/hooks';
import classes from './Topbar.module.css';

export default function Topbar() {
  const { logout } = useAuth();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const user = {
    avatar: 'https://avatars.githubusercontent.com/u/8310877?v=4&size=64',
    name: 'Bruno Carvalho',
    email: 'bruno@brunocarvalho.me',
  };

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <InternalLink to="/">
          <Logo />
        </InternalLink>

        <Menu
          width={260}
          position="bottom-end"
          transitionProps={{ transition: 'pop-top-right' }}
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
          withinPortal
        >
          <Menu.Target>
            <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
              <Group>
                <Avatar src={user.avatar} radius="xl" />

                <div style={{ flex: 1 }}>
                  <Text size="sm" fw={500}>
                    {user.name}
                  </Text>

                  <Text c="dimmed" size="xs">
                    {user.email}
                  </Text>
                </div>
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Configurações</Menu.Label>

            <InternalLink to="profile">
              <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
                Configurações da conta
              </Menu.Item>
            </InternalLink>

            <Menu.Divider />

            <Menu.Item onClick={logout} leftSection={<IconLogout size={16} stroke={1.5} />}>
              Sair
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </header>
  );
}
