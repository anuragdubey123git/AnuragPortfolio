import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.text_primary};
`;

const Text = styled.p`
  max-width: 800px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const Links = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const Anchor = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
`;

const Contact = () => {
  return (
    <Container id="contact">
      <Title>Contact</Title>
      <Text>
        I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. Whether you're looking for a skilled software engineer or want to explore tech solutions, let's start a conversation.
      </Text>
      <Links>
        <Anchor href={Bio.resume} target="_blank" rel="noreferrer">Resume</Anchor>
        <Anchor href={Bio.github} target="_blank" rel="noreferrer">GitHub</Anchor>
        <Anchor href={Bio.linkedin} target="_blank" rel="noreferrer">LinkedIn</Anchor>
      </Links>
    </Container>
  )
}

export default Contact