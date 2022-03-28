import React from 'react';
import { Container, Form, Button } from "semantic-ui-react";

function ejemplo() {
  return (
    <>
    <Container>
    <h1>Formulario de regist</h1>
    <Form>
    <Form.Input type="text" placeholder="Nombre " name="name"/>
    <Form.Input type="text" placeholder="Apellidos" name="apellido"/>
    <Form.Input type="text" placeholder="Correo" name="email"/>
    <Form.Input type="password" placeholder="Contrasena" name="password"/>
    <Form.Input type="password" placeholder="Repetir Contrasena" name="repeatPassword"/>
    <Button type="submit">Registro</Button>
    <Button type="button">Limpiar</Button>


    </Form>
    </Container>
    
    </>
  )
}

export default ejemplo