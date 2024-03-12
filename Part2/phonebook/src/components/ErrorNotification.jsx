const ErrorNotification = ({message}) =>{
    if (message === null) return null;
    const notificactionStyle = {
        border: '1px solid red',
        color:'red',
        borderRadius:'10px',
        fontFamily:'italic',
        fontSize:16,
        padding:'20px',
        width:'40%'
    }
    return (
        <div style={notificactionStyle}>
            {message}
        </div>
    )
}
export default ErrorNotification