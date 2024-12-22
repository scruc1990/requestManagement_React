import PropTypes from 'prop-types';

export const InputComponent = ({
    id,
    name,
    label,
    type,
    formik, 
}) => {

    return (
        <div className="'mb-4 bg-sky-100'">
            <label htmlFor={id} className="block black text-gray-700 ">
                {label}
            </label>
            <input
            id={id}
            name={name}
            type={type}
            className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
            {...formik.getFieldProps(name)}
            />
            {(formik.errors[name] && formik.touched[name]) ?
                <div className="text-red-500">{formik.errors[name]}</div> : null}
        </div>
    );
};

InputComponent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired,
    styles: PropTypes.object
};