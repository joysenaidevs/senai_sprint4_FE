import { Link } from 'react-router-dom';


import logo from "../../assets/img/logo.png";
import "../../assets/css/style.css";

// class Medico extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             idMedico: '',
//             idEspecialidade:'',
//             idClinica: '',
//             nomeMedico: '',
//             email: ''
//         }
//     };
// }

function Medico(){
    
    return(
        <div>
            <header className="menu">
                    
                <Link to="/"><img src={logo} alt="logo da spmedical" /></Link>
                <div className="container">

                    
                    <nav className="menu-principal">
                        <Link to="/">Inicio</Link>
                        <Link to="tela-consultas">Consultas</Link>
                        <a href="tela-agendamento">agendamento</a>
                        <Link className="telalogin-nav-login" to="login" >Login</Link>
                    </nav> 
                </div> 

            </header>
        </div>
    )
    
}


export default Medico;