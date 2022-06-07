import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Profile from './Profile';

function ListProfile() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [listOfUSer, setlistOfUSer] = useState([]);
    
    useEffect(() => {
         axios.get("https://jsonplaceholder.typicode.com/users")
          .then(
            (result) => {
              setIsLoaded(true);
              setlistOfUSer(result.data);
            },(error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }, [])

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
              <div>
                 {listOfUSer.map(user => <Profile user={user} key= {user.id}/>)}
              </div>
            );
          }
        
}

export default ListProfile
