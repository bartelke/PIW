import './List.css';
import { Link } from 'react-router-dom';

function List(props) {
  return (
    <div className="container">
      <div className="header">
        <h1>Book house to find your dream place!</h1>
          <Link to="/add"><button>Add New</button></Link>
      </div>
        
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.bedrooms} bedrooms</p>
            <p>Adress: {item.address}</p>
            <div className="footer">
              <p><strong>Price: {item.price} pln</strong></p>
              <button onClick={() => props.handleDeleteItem(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default List;
