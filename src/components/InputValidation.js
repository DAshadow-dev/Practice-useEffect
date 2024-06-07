import React, { useState, useEffect } from 'react';

const InputValidation = ({typeOfValidation, errorMessage}) =>{
    const [value,setValue] = useState('')
    const [isValid,setIsValid] = useState(false)

    const handleInputChange = (e) =>{
        setValue(e.target.value);
    }

    useEffect(() => {
        setIsValid(typeOfValidation(value));
      }, [value, typeOfValidation]);

      return (
        <div>
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            className={isValid ? '' : 'error'}
          />
          {!isValid && <p className="error-message">{errorMessage}</p>}
        </div>
      );
    };

export default InputValidation;