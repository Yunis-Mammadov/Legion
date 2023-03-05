import Header from "../Header/header";

const PageContainer = ({children}) =>{
    return(
    <>
        <Header/>
        <main>
            {children}
        </main>
    </>
    )
}

export default PageContainer;