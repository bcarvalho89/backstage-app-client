import { IconMusic } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Title } from '@mantine/core';
import Empty from '@/components/Empty/Empty';

export default function MyBand() {
  const hasBand = false;
  const navigate = useNavigate();

  if (!hasBand) {
    const handleActionClick = () => {
      navigate('my-band/edit');
    };
    return (
      <>
        <Title mb="lg">Minha Banda</Title>

        <Empty
          icon={<IconMusic />}
          text="Ao adicionar uma banda você poderá incluir músicas, apresentações e pesquisas."
          title="Você não possui uma banda"
          action={{ onClick: handleActionClick, text: 'Adicionar banda' }}
        />
      </>
    );
  }

  return (
    <>
      <Title>Minha Banda</Title>
    </>
  );
}
