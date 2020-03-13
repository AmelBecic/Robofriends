import React from 'react';
import Card from './Card';

const CardList = ({Korisnici}) => {

    return (

        <div>
            {
            Korisnici.map( (user , i) => {
                return (
                    <Card key={i} name={Korisnici[i].name} id={Korisnici[i].id} email={Korisnici[i].email} />


                );
            }




            )


            }
        </div>

    );
}
export default CardList;