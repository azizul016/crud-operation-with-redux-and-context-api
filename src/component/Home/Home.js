import React, { useEffect } from "react";
import { useContext } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { readSingleData } from "../Redux/action/action";

function Home() {
  // const { users } = useContext(UserContext);
  const [users, setUsers] = React.useState([]);
  const dispatch = useDispatch();
  console.log(users);
  const allData = useSelector((state) => {
    if (state) {
      // return setUsers(state);
      return state.usersProfile;
      // console.log(state.usersProfile)
    }
  });
  useEffect(() => {
    setUsers(allData);
  }, [allData]);

  return (
    <Container className='mt-5'>
      <Link to='/create'>
        <Button className='mb-4' variant='success'>
          Create new user
        </Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Profession</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.salary} /=</td>
              <td>
                <Link to={`/read/${user.id}`}>
                  <Button
                    onClick={() => dispatch(readSingleData({ id:user.id }))}
                    variant='success'
                  >
                    Read
                  </Button>
                </Link>
                <Link to={`/edit/${user.id}`}>
                  <Button className='mx-2' variant='info'>
                    Edit
                  </Button>
                </Link>
                <Link to={`/delete/${user.id}`}>
                  <Button variant='danger'>Delete</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Home;
