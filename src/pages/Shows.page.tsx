import { IconCalendarEvent } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Title } from '@mantine/core';
import Empty from '@/components/Empty/Empty';

export default function Shows() {
  const hasShows = false;
  const navigate = useNavigate();

  if (!hasShows) {
    const handleActionClick = () => {
      navigate('shows/new');
    };

    return (
      <>
        <Title mb="lg">Apresentações</Title>

        <Empty
          icon={<IconCalendarEvent />}
          text="Ao adicionar uma apresentação você poderá gerenciar pesquisas."
          title="Você não tem apresentações"
          action={{ onClick: handleActionClick, text: 'Adicionar apresentação' }}
        />
      </>
    );
  }

  return (
    <>
      <Title>Apresentações</Title>
    </>
  );
}
