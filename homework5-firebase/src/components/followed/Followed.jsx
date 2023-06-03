import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Followed.css";
import { changeFollowed } from "../../features/offers/offersSlice";

export const Followed = () => {
  const testList = useSelector((state) => state.offers.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="header">
        <h1>Followed offers</h1>
        <Link to="/">
          <button>Main menu</button>
        </Link>
      </div>

      <ul>
        {testList
          .filter((element) => element.followed)
          .map((item, index) => (
            <li key={index}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.bedrooms} bedrooms</p>
              <p>Adress: {item.address}</p>
              <div className="footer">
                <p>
                  <strong>Price: {item.price} pln</strong>
                </p>
                {/* tutaj to możemy nawet nie robić handlera tylko od razu dispatch z akcją
                nawet dzięki temu mniej kodu będzie i szybciej będzie działać. Można tak robić
                jak nie chcesz nic poza tym dispatchem robić */}
                <button onClick={() => dispatch(changeFollowed(item.id))}>
                Toggle followed
              </button>
              {item.followed ? <p class="followed">FOLLOWED</p> : <p class="unfollowed">unfollowed</p>}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
