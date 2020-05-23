import Link from 'next/link';
import { useRouter } from 'next/router'

const Users = ({ users }) => {
  const router = useRouter();

  return (
    <>
      <h3>Users</h3>
      <ul className="list-group">
        {users.map(user => {
          return (
            <li
              key={user.id}
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
              <div>
                <strong>{user.first_name} {user.last_name}</strong>
                <p>Email: {user.email}</p>
                <Link href={`users/${user.id}`}>
                  <a href="">See More...</a>
                </Link>
              </div>
              <img src={user.avatar} alt="" style={{ borderRadius: '50%' }} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Users;