import logo from './logo.svg';
import './App.css';

function App() {
  const users = [
    {
      name: "Alan", 
      email: "alan@email.com",
      image: "http://csacfc.org/wp-content/uploads/2019/11/AFbiopic.jpeg",
      phone: "555-555-5555",
      DOB: "1/1/70"
    },
    {
      name: "Sendy", 
      email: "sendy@email.com",
      image: "http://csacfc.org/wp-content/uploads/2017/03/LOGO.png",
      phone: "555-555-5555",
      DOB: "1/1/75"
    },
    {
      name: "Chase", 
      email: "chase@email.com",
      image: "http://csacfc.org/wp-content/uploads/2020/09/CB-Bio-Photo-1.jpg",
      phone: "555-555-5555",
      DOB: "1/1/80"
    },
  ]
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Image</th>
          <th>Phone</th>
          <th>DOB</th>

        </tr>
        {users.map((user, index)=>(
                 <tr key={index}>
                 <td>{user.name}</td>
                 <td>{user.email}}</td>
                 <td><img src = {user.image}/></td>
                 <td>{user.phone}</td>
                 <td>{user.DOB}</td>
               </tr>
        ))}
        {/* <tr>
          <td>Alan</td>
          <td>alan@email.com</td>
          <td><img src="http://csacfc.org/wp-content/uploads/2017/03/LOGO.png
"></img></td>
          <td>555-555-5555</td>
          <td>1/1/75</td>
        </tr>
        <tr>
          <td>Sendy</td>
          <td>sendy@email.com</td>
          <td>Picture</td>
          <td>555-555-5555</td>
          <td>1/1/75</td>
        </tr>
        <tr>
          <td>Christy</td>
          <td>christy@email.com</td>
          <td>Picture</td>
          <td>555-555-5555</td>
          <td>1/1/75</td>
        </tr> */}
      </table>
    </div>
  );
}

export default App;
