import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useUpdateDocumentTitle } from '../../core';
import './OwlUserView.css';

const USER_DATA = gql`
  {
    viewer {
      login
      bio
      avatarUrl(size: 10)
      company
      email
    }
  }
`;

function OwlUserView() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const { data, error, loading } = useQuery(USER_DATA);

  useEffect(() => {
    console.log(data)
    setUser(data?.viewer);
  }, [data]);

  useUpdateDocumentTitle(`Usuario | OwlBook`);

  function renderUser() {
    if (loading || !user) {
      return <p>Cargando...</p>
    } else {
      const { avatarUrl, bio, company, email, login } = user;
      return (
        <section>
          <h1>{login}</h1>
          <img src={avatarUrl} />
          <p>{email}</p>
          <p>{company}</p>
          <p>{bio}</p>
        </section>
      )
    }
  }

  return (
    <main className="owl-user-view">
      {renderUser()}
    </main>
  );
}

export default OwlUserView;
