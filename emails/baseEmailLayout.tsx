// emails/baseEmailLayout.tsx
import { Html, Head, Body, Container } from '@react-email/components';
import React from 'react';

interface BaseEmailLayoutProps {
  children: React.ReactNode;
}

export const BaseEmailLayout: React.FC<BaseEmailLayoutProps> = ({ children }) => {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <Container style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
          {children}
        </Container>
      </Body>
    </Html>
  );
};
