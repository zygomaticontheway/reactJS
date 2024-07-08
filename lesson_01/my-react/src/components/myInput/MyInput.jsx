import './myInput.css';

export default function MyInput({type, name, placeholder, label}) {
    console.log();
    return (
        <>
            <label className='label'>{label}</label>
            <input type={type} name={name} placeholder={placeholder}/>
        </>
    )
}