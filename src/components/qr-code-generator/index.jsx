import QRCode from "react-qr-code";
import { useState  } from "react";



export default function QRCodeGenerator(){

    const [qrcode, setQrcode] = useState('')
    const [input, setInput] = useState('')

    function HandleQrcode(){
        setQrcode(input)
        setInput('')
    }

    return(
        <div>
            <div>
            <h1>Generate Qr code</h1>
            <input value={input}  onChange={(e)=>setInput(e.target.value)}   type="text" id="qr-code-generate" placeholder="Enter your Value"/>
            <button disabled={ input && input.trim() !== "" ? false : true } onClick={HandleQrcode}  type="submit">generate</button>
            </div>
            <div>
                <QRCode id="qr-code-value"
                value={qrcode}
                size={400}
                bgColor="#fff"
                />
            </div>
        </div>
    )

}