import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// import uniqid from "uniqid";
import { UserContext } from "../../App";
import { createSingleData } from "../Redux/action/action";

const Create = () => {
  const [value, setValue] = useState({});
  const { users, setUsers } = useContext(UserContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleBlur = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
      id: Math.floor(Math.random() * 1000),
    });
    // setValue({ ...value, [e.target.name]: e.target.value, id: uniqid('', '-azizulHaque') });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const newUsers = [...users];
    // newUsers.push(value);
    // setUsers(newUsers);
    if (value) {
      dispatch(
        createSingleData({
          value,
        })
        );
      }
      history.push("/");
  };
  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              //  pattern='/^[a-zA-Z]+ [a-zA-Z]+$/'

              onChange={handleBlur}
              type='text'
              name='name'
              placeholder='Enter your name'
            />
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Position</Form.Label>
            <Form.Control
              //   pattern='_[a-zA-Z]+'
              onChange={handleBlur}
              type='text'
              name='position'
              placeholder='Enter your Position'
            />
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Salary</Form.Label>
            <Form.Control
              onChange={handleBlur}
              type='number'
              name='salary'
              placeholder='Enter your salary'
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Create;
