import React, { useState } from 'react';

const useForm = (isInputValid: (value: string) => boolean) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const handleValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => setValue(target.value);
    const handleIsTouched = () => setIsTouched(true);

    let isValid = isInputValid(value);
    const error = !isValid && isTouched;

    return {
        value,
        handleValue,
        handleIsTouched,
        error,
        isValid
    };
};

export default useForm;
