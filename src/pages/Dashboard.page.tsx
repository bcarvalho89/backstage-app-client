import { IconGauge } from '@tabler/icons-react';
import { Title } from '@mantine/core';
import Empty from '@/components/Empty/Empty';

export default function Dashboard() {
  return (
    <>
      <Title>Dashboard</Title>

      <Empty
        icon={<IconGauge />}
        text="Não temos informações para serem exibidas"
        title="Sem informações"
      />
    </>
  );
}
