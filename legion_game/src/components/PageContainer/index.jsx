import Footer from "../Footer/footer";
import Header from "../Header/header";

const PageContainer = ({children}) =>{
    return(
    <>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </>
    )
}

export default PageContainer;