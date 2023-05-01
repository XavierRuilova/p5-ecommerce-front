
import "./profile.css";
const Profile = () => {

  return (
    <>
      <div className="container-profile">
        <h2>Mi perfil</h2>
        <table>
          <thead>
            <th>{}</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td><h4>Usuario:</h4></td>
              <td>{localStorage.getItem('usr')}</td>
            </tr>

          
            <tr>
              <td><h4>Nombre:</h4></td>
              <td>{localStorage.getItem('username')}</td>
            </tr>

            <tr>
              <td><h4>Apellido:</h4></td>
              <td>{localStorage.getItem('lastname')}</td>
            </tr>
            
            
            <tr>
              <td><h4>Email:</h4></td>
              <td>{localStorage.getItem('email')}</td>
            </tr>
          </tbody>
        </table>


      </div>
    </>
  );
};

export default Profile;
