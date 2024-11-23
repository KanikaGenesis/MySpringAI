import {useState} from 'react';

function ChatComponent() {
    const [prompt, setPrompt] = useState('');
    const[chatResponse, setChatResponse] = useState('');

    const askAI = async () => {
        try{
            const response = await fetch(`http://localhost:8082/ask-ai?prompt=${prompt}`);
            const data = await response.text();
            setChatResponse(data);
            console.log("AI response: ", data);
        }
        catch(error){
            console.error("Error chatting with AI: ", error);
        }
    };


    return (
        <div>
            <h1>Talk to AI</h1>
            <input type='text'
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder='Enter a prompt for the AI'
                    />
                <button onClick={askAI}>Chat with AI</button>
                <div className='output'>
                   <p> {chatResponse} </p> 
                </div>

        </div>
        
    );
}

export default ChatComponent;