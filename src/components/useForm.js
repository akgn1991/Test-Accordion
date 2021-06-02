import { useState } from 'react'

export default function useForm(validateOnChange = false, validate) {

    
    const [values, setValues] = useState({ firstName: "", lastName: "" });
    const [errors, setErrors] = useState({});

    const handleInputChange=(e)=>{
        const{name,value} = e.target
        setValues({...values,[name]:value})
        if (validateOnChange)
        validate({ [name]: value })
    }
    const handleReset =(e)=>{
        setValues({firstName: "", lastName: "" })
        setErrors({})
    }
    

    return {values,setValues,handleInputChange,handleReset,errors,
        setErrors,}
}


