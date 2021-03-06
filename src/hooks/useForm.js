import { useState } from "react"

export const useForm = (initialState) => {
 
 const [formData, setFormData] = useState(initialState)
 
 const onChangeData = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}))
 }

 const reset = () => {
     setFormData(initialState)
 }


    return {formData, onChangeData, reset}
}
