import { createContext, useState} from "react";
import { DownloadPopup } from "./homeComponents/DownloadPopup";
import { Footer } from "./homeComponents/Footer"
import { Header } from "./homeComponents/Header"


export const Layout = ({ children }:any) => {

    const [downloadPopup, setDownloadPopup] = useState<boolean>(false);

    return(
        <>
            <Header setDownloadPopup={setDownloadPopup} />
            <main>
                {children}
            </main>
            <Footer setDownloadPopup={setDownloadPopup} />
            <DownloadPopup downloadPopup={downloadPopup} setDownloadPopup={setDownloadPopup} />
        </>
    )
}

