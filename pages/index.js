import Container from '../components/Container';
import fetch from 'isomorphic-fetch';
import Users from '../components/Users';

const HomePage = ({ users }) => {
  return (
    <Container title="My Index">
      <h1>Index</h1>
      <Users users={users}/>
    </Container>
  );
}

HomePage.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users');
  const json_response = await res.json();
  return { users: json_response.data };
}

export default HomePage;