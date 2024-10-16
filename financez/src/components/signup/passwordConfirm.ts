import { useState, useEffect } from 'react';

interface PasswordValidation {
    isValid: boolean;
    errorMessage: string;
}

export const usePasswordValidation = (
    password: string,
    confirmPassword: string
    ): PasswordValidation => {
    const [isValid, setIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (password !== confirmPassword) {
            setIsValid(false);
            setErrorMessage('Passwords do not match');
        } else if (password.length < 8) {
            setIsValid(false);
            setErrorMessage('Password is too short');
        } else {
            setIsValid(true);
            setErrorMessage('');
        }
    }, [password, confirmPassword]);
    return { isValid, errorMessage };
};