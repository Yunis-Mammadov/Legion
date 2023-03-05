import { Box } from "@mui/material";
import PageContainer from "../../components/PageContainer";


const Setlər = () =>{
    return(
        <PageContainer>
            <Box sx={{
            backgroundImage:`url("smoke.jpg")`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            }}>

      
            <Box sx={{
                "& img":{
                paddingTop:10,
                width:'100%',              
            }
        }}>
                <img src="big_set1.jpg" alt="boyuk_set1" />
            </Box>
            
            <Box sx={{
            "& img":{
                paddingTop:10,
                width:'100%',
            }
            }}><img src="middle_set.jpg" alt="orta_set" /></Box>
            
            
            <Box sx={{
                "& img":{
                    paddingTop:10,
                    width:'100%',

                }
            }}><img src="little_set3.jpg" alt="kicik_set1" /></Box>
           
            <Box sx={{
            "& img":{
                paddingTop:10,
                width:'100%',
            }
        }}><img src="little_set4.jpg" alt="kicik_set2" /></Box>
        </Box>
        </PageContainer>
        )
    }
    
export default Setlər;