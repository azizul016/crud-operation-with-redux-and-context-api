import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../App";
import { updateSingleData } from "../Redux/action/action";

function Edit() {
  const history = useHistory();
  const dispatch = useDispatch();
  // const { users, setUsers } = useContext(UserContext);
  const [users, setUsers] = React.useState([]);
  const updatedUser = useSelector((state) => {
    return state.usersProfile;
  });
  useEffect(() => {
    setUsers(updatedUser);
  }, [updatedUser]);
  const { id } = useParams();
  const [updateValue, setUpdateValue] = useState({});
  useEffect(() => {
    if (users) {
      const findUser = users.find((user) => user.id === Number(id));
      if (findUser) {
        setUpdateValue(findUser);
      }
    }
  }, [id, users]);

  const handleChange = (e) => {
    if (updateValue) {
      setUpdateValue({
        ...updateValue,
        [e.target.name]: e.target.value,
      });
    }
  };
  //   console.log(updateValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateValue) {
      dispatch(updateSingleData({ data: updateValue }));
    }
    // if (updateValue) {
    //   const newUsers = [...users];
    //   const user = newUsers.map(user => user.id === Number(id) ? {...user, ...updateValue}: user);
    //   setUsers(user);
    // }
    history.push("/");
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              //  pattern='/^[a-zA-Z]+ [a-zA-Z]+$/'
              type='text'
              name='name'
              value={updateValue?.name}
              onChange={handleChange}
              placeholder='Enter your name'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Position</Form.Label>
            <Form.Control
              //   pattern='_[a-zA-Z]+'
              value={updateValue?.position}
              onChange={handleChange}
              type='text'
              name='position'
              placeholder='Enter your Position'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Salary</Form.Label>
            <Form.Control
              value={updateValue?.salary}
              onChange={handleChange}
              type='number'
              name='salary'
              placeholder='Enter your salary'
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Updated value
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Edit;
