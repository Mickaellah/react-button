import React from 'react';
import Button from "../components/ButtonComponent";

function App() {
    return (
        <div>
            <Button
                text="<Default/>"
                type="button"
                textContent="Default"
                name="FirstButton"/>
            <Button 
                text="&:hover, &:focus"
                type="button"
                textContent="Default"
                name="SecondButton"/>
            <Button 
                text="<Button variant='outline' />"
                type="button"
                textContent="Default"
                name="ThirdButton"/>
            <Button 
                text="&:hover, &:focus"
                type="button"
                textContent="Default"
                name="Button4"/>
            <Button 
                text="<Button variant='text' />"
                type="button"
                textContent="Default"
                name="Button5"/>
            <Button 
                text="&:hover, &:focus"
                type="button"
                textContent="Default"
                name="Button6"/>
            <Button 
                text="<Button disableShadow />"
                type="button"
                textContent="Default"
                name="Button7"/>
            <Button 
                text="<Button disable />"
                type="button"
                textContent="Disabled"
                name="Button8"/>
            <Button 
                text="<Button variant='text' disabled />"
                type="button"
                textContent="Disabled"
                name="Button9"/>
            <Button 
                text="<Button startIcon='local_grocery_store' />"
                type="button"
                textContent="Default"
                name="Button10"/>
            <Button 
                text="<Button endIcon='local_grocery_store' />"
                type="button"
                textContent="Default"
                name="Button11"/>
            <Button 
                text="<Button size='sm' />"
                type="button"
                textContent="Default"
                name="Button12"/>
            <Button 
                text="<Button size='md' />"
                type="button"
                textContent="Default"
                name="Button13"/>
            <Button 
                text="<Button size='lg' />"
                type="button"
                textContent="Default"
                name="Button14"/>
            <Button 
                text="<Button color='Default' />"
                type="button"
                textContent="Default"
                name="Button15"/>
            <Button 
                text="<Button color='primary' />"
                type="button"
                textContent="Default"
                name="Button16"/>
            <Button 
                text="<Button color='secondary' />"
                type="button"
                textContent='Secondary'
                name="Button17"/>
            <Button 
                text="<Button color='danger' />"
                type="button"
                textContent="Danger"
                name="Button18"/>
            <Button 
                text="&:hover, &:focus"
                type="button"
                textContent="Default"
                name="Button19"/>
            <Button 
                text="&:hover, &:focus"
                type="button"
                textContent="Default"
                name="Button20"/>
            <Button 
                text="&:hover, &:focus"
                type="button"
                textContent="Secondary"
                name="Button21"/>
            <Button 
                text="&:hover, &:focus"
                type="button"
                textContent="Danger"
                name="Button22"/>
        </div>
    )
}

export default App;