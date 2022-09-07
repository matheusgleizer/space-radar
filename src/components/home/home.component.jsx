import React from 'react';
import {
  ArticleContainer,
  ArticleContent,
  Title,
  EmphasizedText,
  GithubLinkContainer
} from './home.style';

const Home = () => {
  return (
    <>
      <Title>SpaceX API</Title>
      <ArticleContainer>
        <ArticleContent>
          <p>
            This is a project written in <EmphasizedText>React</EmphasizedText>{' '}
            and <EmphasizedText>Node.js</EmphasizedText>. It fetches and
            displays data provided by a third-party API using{' '}
            <EmphasizedText>GraphQL</EmphasizedText> as a query language.
          </p>

          <p>
            The filters are used to write the queries, so when a filter is
            checked/unchecked the app re-fetches the data using a new query
            generated in the frontend.
          </p>

          <p>
            An express server is responsible to receive requests from the
            frontend, fetch the data provided by the third-party API and send
            back a response to the frontend with the data fetched.
          </p>

          <p>
            The objective of this project is to put into practice concepts in
            React, Node.js and GraphQL. Styled-components were used in order to
            make the code more readable, although the style is quite simple and
            not much effort has been put into improving it.
          </p>

          <p>
            The GraphQL API can be accessed via the link{' '}
            <a href='https://api.spacex.land/graphql/'>
              https://api.spacex.land/graphql/
            </a>
            .
          </p>
        </ArticleContent>
      </ArticleContainer>
      <GithubLinkContainer>
        <a href='https://github.com/matheusgleizer/space-radar'>Github Repo</a>
      </GithubLinkContainer>
    </>
  );
};

export default Home;
