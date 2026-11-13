
import { useState } from "react";

export default function FormEx1() {
    const [name, setName] = useState("text");

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`The name you entered was: ${name}`)

        console.log("name:",name)
    }

    return (
        <>
            <div style={{ width: '80%', margin: 'auto' }}>
                <form onSubmit={handleSubmit}>
                    <label>Enter your name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <input type="submit" />

                    



                </form>
            </div>
        </>
    )
}