import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

const CreateUser = () => {

    const ValidationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Este es un campo requerido")
            .email("Correo electronico invalido")
            .max(255, 'Maximo 255 caracteres'),
        username: Yup.string()
            .min(5, "Minimo 5 caracteres")
            .max(25, 'Maximo 25 caracteres')
            .required('Este es un campo requerido')
    })

    const handleBlurForm = () => {
        console.log("handleblur")
    }

    return (
        <Formik
            initialValues={{ email: '', username: '' }}
            validationSchema={ValidationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
                /* and other goodies */
            }) => (
                console.log(errors),
                <form>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlurForm}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                    />
                    {errors.username && touched.username && errors.username}
                    <button type="button" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    )

}
export default CreateUser