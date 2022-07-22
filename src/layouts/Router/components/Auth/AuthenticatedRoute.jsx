import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component, authorizedRoles }) => {
    const { isAuthenticated } = useSelector((state) => state.loginData);

    const data = { role: ["admin"] };

    const isAuthorized = () => {
        let authorized = false;
        if (authorizedRoles) {
            data.role.forEach((role) => {
                if (authorizedRoles.some((authorizedRole) => authorizedRole === role)) {
                    authorized = true;
                }
            });
        } else {
            authorized = true;
        }
        return authorized;
    };

    return isAuthenticated ? (
        isAuthorized() ? (
            <Component />
        ) : (
            <Navigate to={`/`} />
        )
    ) : (
        <Navigate to={`/`} />
    );
};

export { AuthenticatedRoute };
