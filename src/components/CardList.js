import React from "react";
import Card from './Card';

const CardList = ({ robots }) => (
    <div>
        {
            robots.map((robot, id) => <Card key={id} robot={robot} />)
        }
    </div>
);

export default CardList;