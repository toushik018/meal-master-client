import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { css } from "@emotion/react";
import { ClipLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <ClipLoader color={'#123abc'} loading={loading} css={override} size={150} />
            </div>
        )

    }


    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace> </Navigate>
        ;
};

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


export default PrivateRoute;