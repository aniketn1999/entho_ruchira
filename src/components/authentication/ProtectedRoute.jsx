import React, { useState } from 'react'
import { useAuth } from './AuthContext'
import LoginWithMobile from './LoginWithMobile';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    const { currentUser } = useAuth();
    const location = useLocation()
    const [showLoginPopup, setShowLoginPopup] = useState(false)

    if (!currentUser) {
        return (
            <>
                <Navigate to='/' state={{from: location}} replace/>
                {/* <LoginWithMobile
                    isOpen={true}
                    onClose={() => setShowLoginPopup(false)} 
                />*/}
            </>
        )
    }


    return children
}

export default ProtectedRoute
