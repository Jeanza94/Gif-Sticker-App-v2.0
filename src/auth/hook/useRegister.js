import { useState } from "react";

export const useRegister = () => {

    const [inputValue, setInputValue] = useState({
        displayName: "",
        email: "",
        password: ""
    })

    const { displayName, email, password } = inputValue;

    const getDisplayNameError = () => {
        if (displayName.length <= 1) {
            return "The name is mandatory"
        } else {
            return null;
        }
    }

    const getEmailError = () => {
        if (/@/.test(email) === false) {
            return "You have to put the @"
        } else {
            return null;
        }
    }

    const getPasswordError = () => {
        if (password.length <= 5) {
            return "The password should have at least 6 characters"
        } else {
            return null;
        }
    }

    const error = {
        displayName: getDisplayNameError(),
        email: getEmailError(),
        password: getPasswordError()
    }

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }

    return { onInputChange, displayName, email, password, error }
}