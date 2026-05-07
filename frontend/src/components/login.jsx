import api from '../api/axios';
import Form from '../components/Form';
import { useAuth } from '../hook/UseAuth';  
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";

const Login = () => {
    // const { setUser } = useAuth();
    // const navigate = useNavigate();

    const [user, setUser] = useState({});

    // const [count, setCount] = useState(0);
    // const buttonRef = useRef(null);
 
    // const fields = [
    //     { name: 'email', label: 'Email', type: 'email', validation: { required: 'Requis' } },
    //     { name: 'password', label: 'Password', type: 'password', validation: { required: 'Requis' } }
    // ];

    // const onSubmit = async (data) => {
    //     try {
    //         const res = await api.post('/auth/login', data);
    //         localStorage.setItem('token', res.data.token);
    //         setUser(jwtDecode(res.data.token));
    //         navigate('/dashboard')
    //     } catch (err) { alert("Identifiants incorrects", err); }
    // };

    // const increment = () => {
    //     setCount(count+1);
    // }

    // const decrement = () => {
    //     setCount(count-1);
    // }

    // useEffect(() => {
    //     const button = document.querySelector('button');
    //     console.log("à partir du JS:",button);

    //     console.log("à partir de React useRef:",buttonRef.current);
    // },[]);

    // useEffect(() => {
    //     alert(count);
    // }, [count]);

    useEffect(() => {
        console.log("Requête API en cours")

        setTimeout(() => {
            console.log("Requête API fini")
            setUser({
                name: "Morgan",
                lastName: "Scholz"
            });
        }, 2_000);
    },[]);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div>
            <h2>Connexion</h2>
            {/* <Form inputs={fields} onSubmit={onSubmit} submitLabel="Login" /> */}


{/* 
            <h2>Compteur: <span>{count}</span></h2>

            <button ref={buttonRef} onClick={increment}>+</button>
            <button onClick={decrement}>-</button> */}
        </div>
);
};
export default Login;