import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../App";

function Read() {
  const { id } = useParams();
  // const { users } = useContext(UserContext);
  const [singleUser, setSingleUser] = useState(null);

  const singleUsers = useSelector((state) => {
    if (state) return state.usersProfile;
  });
  useEffect(() => {
    const singleUser = singleUsers.find((user) => user.id === Number(id));
    setSingleUser(singleUser);
  }, [id, singleUsers]);
  return (
    <Container className='mt-5'>
      <h1>Name: {singleUser?.name}</h1>
      <h1>Profession: {singleUser?.position}</h1>
      <h1>Salary: {singleUser?.salary} /=</h1>
      <Link to='/'>
        <Button size='lg' block variant='info'>
          Back to Home
        </Button>
      </Link>
    </Container>
  );
}

export default Read;
