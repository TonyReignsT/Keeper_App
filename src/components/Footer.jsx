
export default function Footer(){
    const date = new Date();
    const currentYear = date.getFullYear();

    return(
        <footer>
            <p>Copyright ⓒ {currentYear}</p>
        </footer>
        
    )
}