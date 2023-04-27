import Artyom from 'artyom.js'
import data from '../data/commands.json'

const artyom = new Artyom();
const name = "But"

/** INICIALIZADO */
artyom.initialize({
    name: name,
    lang: "en-GB",
    debug: true, // Show what recognizes in the Console
    listen: true, // Start listening after this
    speed: 1, // Talk a little bit slow
    mode: "normal", // This parameter is not required as it will be normal by default
    continuous: false,
    executionKeyword: "ahora",
    soundex: true
})
.then(function () {
    console.log("Artyom has been correctly initialized");
}).catch(function () {
    console.error("An error occurred during the initialization");
});

/** CREACION DE COMANDOS */
const commands = data.map(e => {
    return {
        indexes: [...e.command, e.code],
        action: function () {
            const el = document.getElementById("span-send")
            el.innerText = JSON.stringify(e)

            const elState = document.getElementById("state")
            elState.className = "turn-green"
        }
    }
})

/** REGISTRO DE COMANDOS */
artyom.addCommands(commands);

/**  */
artyom.redirectRecognizedTextOutput((recognized, isFinal) => {
    const el = document.getElementById("span-preview")
    const actualText = el.innerHTML
    const text = isFinal ? recognized : ""
    if (isFinal){
        const elState = document.getElementById("state")
        elState.className = "turn-red"
        const send = document.getElementById("span-send")
        send.innerText = ""
    }
    el.innerHTML= text
});

/** DOM */
function ArtyomComponent() {
    return (
        <div>
            <h2>Artyom Component</h2>
            <div>
            <ul>Ejemplo: 
                <li>"{name} gira a la izquierda"</li>
                <li>"{name} STOP "</li>
                <li>"{name} explore the area"</li>
            </ul>
            </div>
            <div className="p-2 flex flex-col justify-center ">
                <h3 className="underline m-1 pt-5 text-left">Zona del texto de control</h3>
                <span id="span-preview" className="text-white h-10 w-200 border-2 border-white p-2"></span>
            </div>
            <div className="p-2 flex flex-col justify-center ">
                <h3 className="underline m-1 pt-5 text-left">Datos enviados</h3>
                <span id="span-send" className="text-white h-max w-200 border-2 border-white p-2">JSON</span>
            </div>
            <div className="p-2 flex justify-center" >
                <div id="state" className="turn-red"></div>
            </div>
        </div>
    )
}

export default ArtyomComponent
