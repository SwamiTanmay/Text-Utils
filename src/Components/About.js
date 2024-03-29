import React, {useState} from 'react'

export default function About(props) {
    
    const [dark, setdark] = useState({
        backgroundColor : 'white',
        color : 'black',
        border : 'solid 2px violet'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    let toggleStyle = ()=>{
            if(dark.color === 'white') {
                setdark({
                    color : 'black',
                    backgroundColor : 'white',
                    border : '1px solid black'
                })
                setBtnText("Enable Dark Mode")
            } else {
                setdark({
                    color : 'white',
                    backgroundColor : 'black',
                    border : 'solid 2px violet'
                })
                setBtnText("Enable Light Mode")
            }

    }

    return (
        <div className="container" style = {dark}>
            <h1 className = "m-3">About Us</h1>
            <div className="accordion" style = {dark} id="accordionExample">
                <div className="accordion-item" style = {dark}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style = {dark} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style = {dark}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style = {dark} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {dark}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style = {dark}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style = {dark} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {dark}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
            <div className="container">
                <button type = "button" onClick = {toggleStyle} className="btn btn-primary my-3">{btnText}</button>
            </div>
        </div>
    )
}
