import {imageBase64} from "./imageBase64";
import {uint8ArrayFromBase64} from "./uint8ArrayFromBase64";

const textarea = document.getElementById('textarea') as HTMLTextAreaElement;
const button = document.getElementById('button')!;
const message = document.getElementById('message')!;

textarea.value = imageBase64;

button.addEventListener('click', async () => {
    const formData = new FormData()

    formData.append('fileToUpload', new Blob([uint8ArrayFromBase64(textarea.value)]), 'head.jpg')

    const result = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
    })
    message.innerHTML = await result.text()
})

