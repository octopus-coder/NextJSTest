import Container from "../../components/Container"
import fetch from 'isomorphic-fetch';

const User = ({ userInfo }) => {

  return (
    <Container title="User Info">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img src={userInfo.avatar} alt="" style={{ borderRadius: '50%' }} />
            </div>
            <div className="card-body">
              <h3>{userInfo.id}. {userInfo.first_name} {userInfo.last_name}</h3>
              <p>Email: {userInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );

};

User.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const json_response = await res.json();
  console.log(json_response);
  return { userInfo: json_response.data };
}

export default User;