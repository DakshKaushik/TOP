import React from "react";
import '../styles/personalDetails.css'

function PersonalDetails({data,onChange}){
    return (
        <div>
            <h2>Column 1</h2>
            <form>
                <div className="nameSection">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={data.name}
                        onChange={onChange}
                        name="name"
                        
                    />
                </div>
                <div className="emailSection">
                    <input
                        type="text"
                        placeholder="Email"
                        value={data.email}
                        onChange={onChange}
                        name="email"
                    />
                </div>
                <div className="phoneSection">
                    <input
                        type="number"
                        placeholder="Phone Number"
                        value={data.phone}
                        onChange={onChange}
                        name='phone'
                    />
                </div>
                <div className="addressSection">
                    <input
                        type="text"
                        placeholder="Address"
                        value={data.address}
                        onChange={onChange}
                        name='address'
                    />
                </div>

            </form>
        </div>
    )
}
export default PersonalDetails