import './App.css'
import { useState } from 'react';
import QrScanner from 'qr-scanner';

function App() {

  const [qrfile, setQrFile] = useState<File | null>()
  const [urlIm, setUrlIm] = useState<String>("")

  const handleButton = async () => {
    console.log("Clicked")
    if (!qrfile) {
      return
    }
    console.log("Printing");
    const result = await QrScanner.scanImage(qrfile, {returnDetailedScanResult: true});
    console.log(result.data)
    setUrlIm(result.data);
  }

  const onFileChange = async (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      console.log("Nothing");
      alert("There was an issue, nothing registered");
    }
    else {
      setQrFile(file);
    }



  }

  return (
    <>
    <h1 className='text-5xl text-center'>QR Everything</h1>
    <div className='flex justify-center p-[5rem] gap-5'>
      <h1>Upload Items:</h1>
      <input type="file" id='qracc' placeholder='Paste here' accept='image/*' onChange={onFileChange} />
    </div>

    <button onClick={handleButton}>Render</button>
    <h1> The URL is {urlIm}</h1>
    </>
  )
}

export default App
