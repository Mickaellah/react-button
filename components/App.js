import React from 'react';
import Button from "../components/ButtonComponent";

function App() {
    return (
        <div>
            <Button
                text="<Button/>"
                type="button"
                textContent="Default"
                name="defaultBttn"
                color="default1"/>
            <Button 
                text="<Button variant='outline' />"
                type="button"
                textContent="Default"
                name="outline"
                variant="outline"/>
            <Button 
                text="<Button variant='text' />"
                type="button"
                textContent="Default"
                name="textVariant"
                variant="text"/>
            <Button 
                text="<Button disableShadow />"
                type="button"
                textContent="Default"
                name="disableShadow"
                disableShadow="disableShadow"/>
            <Button 
                text="<Button disable />"
                type="button"
                textContent="Disabled"
                name="disabledBttn"
                disable="disable"/>
            <Button 
                text="<Button variant='text' disabled />"
                type="button"
                textContent="Disabled"
                name="textDisabledBttn"
                variant="text disable"/>
            <Button 
                text="<Button startIcon='local_grocery_store' />"
                type="button"
                textContent="Default"
                name="startIconBttn"
                icon="startIcon"/>
            <Button 
                text="<Button endIcon='local_grocery_store' />"
                type="button"
                textContent="Default"
                name="endIconBttn"
                icon="endIcon"/>
            <Button 
                text="<Button size='sm' />"
                type="button"
                textContent="Default"
                name="smBttn"
                size="sm"/>
            <Button 
                text="<Button size='md' />"
                type="button"
                textContent="Default"
                name="mdBttn"
                size="md"/>
            <Button 
                text="<Button size='lg' />"
                type="button"
                textContent="Default"
                name="lgBttn"
                size="lg"/>
            <Button 
                text="<Button color='Default' />"
                type="button"
                textContent="Default"
                name="default2"
                color="default"/>
            <Button 
                text="<Button color='primary' />"
                type="button"
                textContent="Default"
                name="primaryBttn"
                color="primary"/>
            <Button 
                text="<Button color='secondary' />"
                type="button"
                textContent='Secondary'
                name="secondaryBttn"
                color="secondary"/>
            <Button 
                text="<Button color='danger' />"
                type="button"
                textContent="Danger"
                name="dangerBttn"
                color="danger"/>
        </div>
    )
}

export default App;