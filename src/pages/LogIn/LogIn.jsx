// React
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

// Components
// import Loader from "@habi/habi-react-components/dist/Loader/loader";
import { LogInWrapper } from "./styles";
// import UserExternalForm from './components/userExternalForm';

// External
import GoogleLogin from "react-google-login";

// Assets
import logo from "../../static/logo/habi.svg";
import loginDecorationStart from "../../static/img/home/login-decoration-start.svg";
import loginDecorationEnd from "../../static/img/home/login-decoration-end.svg";

// Redux
import { useDispatch } from "react-redux";
// import { updateLoginData } from "../../redux/actions/loginData";

// Apis
import { ROUTES } from "../../utils/constants/routes";
import { updateLoginData } from "../../redux/actions/loginData";
import { ROLES } from "../../utils/constants/constants";
import UserExternalForm from "./components/userExternalForm";
import UserPool from "../../api/ctls/Login/UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [loading, setLoading] = useState(false);
    // const { initialPath } = useSelector((state) => state.loginData);
    useEffect(() => {
        const dataStorage = localStorage.getItem("loginData");
        if (dataStorage && JSON.parse(dataStorage).isAuthenticated) {
            dispatch(updateLoginData(JSON.parse(dataStorage)));
            navigate(ROUTES.READ_CTLS);
        }
    });

    const onSuccessLogin = (profile) => {
        const dataLogin = {
            isAuthenticated: true,
            data: {
                role: ROLES.ADMIN,
                email: profile.email,
                name: profile.name,
            },
        };
        dispatch(updateLoginData(dataLogin));
        localStorage.setItem("loginData", JSON.stringify(dataLogin));
        navigate(ROUTES.DASHBOARD);
    };

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = UserPool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject("no hay una session");
                    } else {
                        resolve(session);
                    }
                });
            } else {
                reject("no hay un usuario");
            }
        });
    };

    const onRejectLogin = () => {
        // navigate(ROUTES.DASHBOARD);
    };

    const handleLoginExternalUser = async ({ email, password }) => {
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                onSuccessLogin(data);
            },
            onFailure: (err) => { },
            newPasswordRequired: (data) => {
                onSuccessLogin(data);
            },
        });
    };

    const getLoginCard = () => {
        return (
            <div className="login-card animate__animated animate__backInUp">
                <img src={logo} alt="logo-img" />
                <span className="title">Gestión CTLS | Habi</span>
                <div className="google-button-container">
                    <span className="alternative-text">Iniciar sesión</span>
                    <UserExternalForm handleLogin={handleLoginExternalUser} />
                </div>
            </div>
        );
    };

    return (
        <LogInWrapper>
            <div className="decoration">
                <img src={loginDecorationStart} alt="Habi decoration" />
                <img src={loginDecorationEnd} alt="Habi decoration" />
            </div>
            <div className="login-container">
                <div />
                {/* {loading ? getLoading() : getLoginCard()} */}
                {getLoginCard()}
                <div>
                    <a href="https://habi.co" target="blank" className="habi-link">
                        Habi.co
                    </a>
                </div>
            </div>
        </LogInWrapper>
    );
};

export { LogIn };
