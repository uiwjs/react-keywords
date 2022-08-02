import GithubCorner from '@uiw/react-github-corners';
import '@wcj/dark-mode';
import styled from 'styled-components';
import pkg from '../package.json';
import Markdown from './Markdown';

const Warpper = styled.div``;
const Content = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  sup {
    font-size: 14px;
    padding-left: 10px;
    position: absolute;
    color: var(--color-fg-subtle);
  }
`;

const Keywords = styled.span`
  background-color: #ffff00;
`;

export default function App() {
  return (
    <Warpper className="wmde-markdown-var">
      <GithubCorner fixed target="__blank" zIndex={99999} href="https://github.com/uiwjs/react-keywords" />
      <dark-mode permanent light="Light" dark="Dark"></dark-mode>
      <Title>
        React <Keywords>key</Keywords>words<sup>v{pkg.version}</sup>
      </Title>
      <Content>
        <Markdown />
      </Content>
    </Warpper>
  );
}
