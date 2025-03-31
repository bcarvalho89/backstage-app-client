import { gql, useQuery } from '@apollo/client';
import { IconDotsVertical } from '@tabler/icons-react';
import {
  Avatar,
  // Badge,
  Button,
  Group,
  Menu,
  Table,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { Role, User } from '@/apollo/types/User';
import Card from '@/components/Card/Card';
import { useHasPermission } from '@/hooks/useHasPermission';

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      avatar
      email
      name
      role
      username
    }
  }
`;

export default function Users() {
  const theme = useMantineTheme();
  const canDeleteUser = useHasPermission(Role.ADMIN);

  const { data, loading: queryLoading } = useQuery<{ getUsers: User[] }>(GET_USERS);

  if (queryLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return null;
  }

  const rows = data.getUsers.map((item) => (
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
      <Table.Td>-</Table.Td>
      <Table.Td>
        -
        {/*item.active ? (
          <Badge fullWidth variant="light">
            Active
          </Badge>
        ) : (
          <Badge color="gray" fullWidth variant="light">
            Disabled
          </Badge>
        )*/}
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
            {canDeleteUser && <Menu.Item>Excluir</Menu.Item>}
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
