import {useState} from 'react';

function ImageGenerator() {

    const [prompt, setPrompt] = useState('');
    const [imageUrls, setImageUrls] = useState([]);

    const generateImages = async () => {
        try{
            const response = await fetch(`http://localhost:8082/generate-image?prompt=${prompt}`);
            const urls = await response.json();
            setImageUrls(urls);

        }
        catch(error){
            console.error("Error generating image: ", error);
        
    };
}




    return (
        <div className='tab-content'>
            <h1>Generate cool images!!!</h1>
            <input type='text'
                    value={prompt} 
                    onChange={(e) => setPrompt(e.target.value)} 
                    placeholder='Enter prompt for image'
                    />
            <button onClick={generateImages}>Generate Images</button>

            <div className='image-grid'>
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Generated ${index}`} />
                ))}
                {[...Array(4-imageUrls.length)].map((_, index) => (
                    <div key={index} className='empty-image-slot'></div>
                ))}

            </div>

            </div>
        
    );
}

export default ImageGenerator;