import React, { useState } from "react";
import { useContext } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { deleteSingleData } from "../Redux/action/action";

function Delete() {
  const { id } = useParams();
  // console.log(id)
  
  const dispatch = useDispatch()
  // const { users, setUsers } = useContext(UserContext);

  return (
    <div>
      <Container>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to delete</Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Link to='/'>
              <Button variant='primary'>Cancel</Button>
              {/* <Button className='ml-3' onClick={handleClick} variant='danger'> */}
                <Button className='ml-3' onClick={()=> dispatch(deleteSingleData({id}))} variant='danger'>
                Delete
              </Button>
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      </Container>
    </div>
  );
}

export default Delete;
