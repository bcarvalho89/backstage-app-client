import { IconAward } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Title } from '@mantine/core';
import Empty from '@/components/Empty/Empty';

export default function Surveys() {
  const hasSurveys = false;
  const navigate = useNavigate();

  if (!hasSurveys) {
    const handleActionClick = () => {
      navigate('surveys/new');
    };

    return (
      <>
        <Title mb="lg">Pesquisas de Satisfação</Title>

        <Empty
          icon={<IconAward />}
          text="Pesquisas de satisfação são uma ótima maneira de mensurar a qualidade da banda"
          title="Você não tem pesquisas"
          action={{ onClick: handleActionClick, text: 'Adicionar pesquisa' }}
        />
      </>
    );
  }

  return (
    <>
      <Title>Pesquisas de Satisfação</Title>
    </>
  );
}
