import React from 'react'

function Education({data,onChange}){
    return (
        <div className='educationContainer'>
            <h2>Column 2</h2>
            <form className='educationForm'>
                <input 
                    type="text"
                    placeholder='School'
                    name='school'
                    value={data.school}
                    onChange={onChange}
                />
                <input 
                    type='text'
                    placeholder='Degree'
                    name='degree'
                    onChange={onChange}
                    value={data.degree}
                />

            </form>
        </div>  
    )
}
export default Education