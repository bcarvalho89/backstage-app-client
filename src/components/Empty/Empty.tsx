import { Box, Button, Flex, Text, Title } from '@mantine/core';
import Card from '../Card/Card';
import classes from './Empty.module.css';

interface EmptyProps {
  title: string;
  text: string;
  icon: React.ReactNode;
  action?: {
    text: string;
    onClick: () => void;
  };
}

export default function Empty(props: EmptyProps) {
  const { icon, text, title, action } = props;

  return (
    <Card>
      <Flex direction="column" className={classes.inner} align="center" gap="xs">
        <Box className={classes.icon}>{icon}</Box>
        <Title fz="h3">{title}</Title>
        <Text fz="sm">{text}</Text>

        {action && (
          <Button mt="lg" onClick={action.onClick}>
            {action.text}
          </Button>
        )}
      </Flex>
    </Card>
  );
}
