import { useState } from "react"



export const useDownloadPopup = () => {
    const [downloadPopup, setDownloadPopup] = useState<boolean>(false)

    return{
        downloadPopup,
        setDownloadPopup,
    }
}