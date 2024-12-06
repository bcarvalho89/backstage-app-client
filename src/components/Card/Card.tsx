import { ReactNode } from 'react';
import { Card as MatineCard } from '@mantine/core';

interface CardProps {
  children: ReactNode;
  headerImage?: string;
}

export default function Card(props: CardProps) {
  const { children, headerImage } = props;

  return (
    <MatineCard shadow="sm" padding="lg" radius="md" withBorder>
      {headerImage && (
        <MatineCard.Section
          h={260}
          style={{
            backgroundImage: `url(${headerImage})`,
          }}
        />
      )}

      {children}
    </MatineCard>
  );
}
