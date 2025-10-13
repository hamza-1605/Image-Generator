import React from 'react'

const InputBox = (props) => {
    const {type, text, placeholder, name, value, onChange} = props;
  return (
    <>
      <p style={{fontWeight: '500' , color: 'gray'}}>{text}</p>
      
      {type === 'textarea' ? (
        <textarea
          style={{
            borderRadius: '8px',
            width: '100%',
            margin: '3px 0px 20px 0px',
            padding: '10px',
            outline: 'none',
            border: '2px solid navy',
            color: 'whitesmoke',
            backgroundColor: 'transparent',
            fontSize: '14px',
            resize: 'none', // prevent manual resize (optional)
          }}
          placeholder={placeholder}
          rows={7}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          style={{
            borderRadius: '8px',
            width: '100%',
            height: '45px',
            margin: '3px 0px 20px 0px',
            padding: '5px 10px',
            outline: 'none',
            border: '2px solid navy',
            color: 'whitesmoke',
            backgroundColor: 'transparent',
            fontSize: '14px',
          }}
          type="text"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  )
}

export default InputBox
