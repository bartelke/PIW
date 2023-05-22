import "./List.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeFollowed } from "../../features/offers/offersSlice";
function List() {
  const testList = useSelector((state) => state.offers.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="header">
        <h1>Book house to find your dream place!</h1>
        <Link to="/followed">
          <button>Followed</button>
        </Link>
        <Link to="/add">
          <button>Add New</button>
        </Link>
      </div>

      <ul>
        {testList.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.bedrooms} bedrooms</p>
            <p>Adress: {item.address}</p>
            <div className="footer">
              <p>
                <strong>Price: {item.price} pln</strong>
              </p>

              <button onClick={() => {
                dispatch(changeFollowed(item.id))
              }
              }>
                Toggle followed
              </button>
              {item.followed ? <p class="followed">FOLLOWED</p> : <p class="unfollowed">unfollowed</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
