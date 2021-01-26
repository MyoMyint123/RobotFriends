import React from "react";
import { Link } from "react-router-dom";

const Card = ({ robot }) => (
    <Link to={`/users/${robot.id}`}>
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${robot.id}`} width="200" height="auto" alt="Robot" />
            <div>
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
            </div>
        </div>
    </Link>
);

export default Card;