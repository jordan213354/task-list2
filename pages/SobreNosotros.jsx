import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
function SobreNosotros() {
    return (
        		<Box w='100%' h='450px' p={40} bgGradient='linear(to-r, green.200, pink.500)' borderRadius={10}>
        <div className='inicio-titulo' >


  
          
           <Container borderRadius={10} maxW='2x1' bg='blue.600' centerContent>
                    <Box padding='6' bg='white' color='#618685' maxW='md'>
                  
<h1>Lista de tareas</h1>
<p>
    Esta lista de tareas tiene como proposito como su nombre lo indica es crear tareas, es muy sencilla de manejar y adactable al usuario. En el apartado de entrada lograras ingresar las tareas que quieras guardar, en si con solo un clic lograras borrar, actualizar y guardar tus tareas. La lista de tareas solo tiene una condicion y es que nose puede ingresar un nombre menor a tres caracteres.
                            Tambien en la parte superior se encuentra dos indicadores en donde hace refencia de cuantas tareas tienes, y cuantas tareas tienes Pendientes.</p>
                     
  </Box>
</Container>
         
           
          

            <h2>Tecnologias que utilice</h2>
            <ol>
                <li>HTML Y CSS</li>
                <li>JavaScript</li>
                <li>React: hooks, useform, react-router,react-icons</li>
            </ol>
            </div>
        </Box>
    )
}

export default SobreNosotros