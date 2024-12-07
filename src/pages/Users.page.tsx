import { IconDotsVertical } from '@tabler/icons-react';
import {
  Avatar,
  Badge,
  Button,
  Group,
  Menu,
  Table,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import Card from '@/components/Card/Card';

const data = [
  {
    id: 'abc123',
    username: 'admin',
    name: 'Bruno Gomes de Carvalho',
    email: 'bruno@brunocarvalho.me',
    avatar: 'https://avatars.githubusercontent.com/u/8310877?v=4&size=200',
    role: 'Administrator',
    lastActive: '2 days ago',
    active: true,
  },
];

export default function Users() {
  const theme = useMantineTheme();

  const rows = data.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text fz="xs" c="dimmed">
              {item.email}
            </Text>
          </div>
        </Group>
      </Table.Td>

      <Table.Td>{item.role}</Table.Td>
      <Table.Td>{item.lastActive}</Table.Td>
      <Table.Td>
        {item.active ? (
          <Badge fullWidth variant="light">
            Active
          </Badge>
        ) : (
          <Badge color="gray" fullWidth variant="light">
            Disabled
          </Badge>
        )}
      </Table.Td>
      <Table.Td>
        <Menu
          transitionProps={{ transition: 'pop-top-right' }}
          position="bottom-end"
          width={100}
          withinPortal
        >
          <Menu.Target>
            <Button type="button" variant="transparent" p="xs" color={theme.colors.gray[9]}>
              <IconDotsVertical size={18} stroke={1.5} />
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Editar</Menu.Item>
            <Menu.Item>Excluir</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Title mb="lg">Usuários</Title>

      <Card>
        <Table.ScrollContainer minWidth={800}>
          <Table verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Usuário</Table.Th>
                <Table.Th>Permissão</Table.Th>
                <Table.Th>Último login</Table.Th>
                <Table.Th>Status</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Card>
    </>
  );
}
