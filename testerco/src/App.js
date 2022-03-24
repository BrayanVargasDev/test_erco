import React, { useEffect, useState} from 'react';
import { FormControl, InputLabel ,Input,FormHelperText, Container} from '@material-ui/core'
import './App.css';

function App() {

  return (
    <div className="App">
      <Container>
        <FormControl>
          <InputLabel htmlFor="country">Pais</InputLabel>
          <Input id="country" aria-describedby="country-helper" />
          <FormHelperText id="country-helper">Acá puedes escoger un país</FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="state">Estado</InputLabel>
          <Input id="state" aria-describedby="state-helper" />
          <FormHelperText id="state-helper">Acá puedes escoger un estado</FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="city">Pais</InputLabel>
          <Input id="city" aria-describedby="city-helper" />
          <FormHelperText id="city-helper">Acá puedes escoger una ciudad</FormHelperText>
        </FormControl>
      </Container>


    </div>
  );
}

export default App;
