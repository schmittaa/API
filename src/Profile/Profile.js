import React from 'react'
import { Card } from 'react-bootstrap';

function Profile({ user }) {
    return (
        <div>
           <div>
           <Card border="success" className="Card">
                <Card.Header ><h6 style={{color:"green", paddingTop:"20px", display:"inline-flex"}}>{user.name}  {user.username}</h6> <img src="./user.jpeg"/></Card.Header>
                <Card.Body>
                    <Card.Text className="Text"> <p>Mail :</p> {user.email}</Card.Text>
                    <Card.Text className="Text"> <p>Address :</p>
                    {user.address.street}{user.address.suite}{user.address.city} {user.address.zipcode} 
                    </Card.Text>
                    <Card.Text className="Text"><p>Phone : </p> {user.phone}</Card.Text>
                    <Card.Text className="Text"><p>Website : </p>{user.website}</Card.Text>
                    <Card.Text className="Text"><p>Company : </p> {user.company.name}, {user.company.bs}</Card.Text>
                </Card.Body>
            </Card>
            <footer></footer>
           </div>
        </div>
    )
}

export default Profile; 