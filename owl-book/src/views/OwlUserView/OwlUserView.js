import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/react-hooks';
import { useUpdateDocumentTitle } from '../../core';
import { USER_DATA } from "./query";
import './OwlUserView.css';



function OwlUserView() {
  const [user, setUser] = useState({});
  const { data, error, loading } = useQuery(USER_DATA);

  useEffect(() => {
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
          <p id="email">{email}</p>
          <p id="company">{company}</p>
          <p id="bio">{bio}</p>
        </section>
      )
    }
  }

  return (
    <main className="owl-user-view">
      {renderUser()};
    </main>
  );
}

export default OwlUserView;
