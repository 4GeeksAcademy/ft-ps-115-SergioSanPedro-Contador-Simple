import { Digito } from "./Digito";


export function Contador({counter, reset}) {

    let digito1 = counter % 10;
    let digito2 = Math.floor(counter / 10) % 10;
    let digito3 = Math.floor(counter / 100) % 10;
    let digito4 = Math.floor(counter / 1000) %10;
    let digito5 = Math.floor(counter / 10000) %10;
    let digito6 = Math.floor(counter / 100000) %10;


    return (
        <div className="card bg-dark mt-5 container">
            <div className="card-body text-white g-3">
                <h2 className="card-title text-center">Cuenta Kilometros</h2>

                <div className="text-center p-3">
                    <Digito valor={digito6}/>
                    <Digito valor={digito5}/>
                    <Digito valor={digito4}/>
                    <Digito valor={digito3}/>
                    <Digito valor={digito2}/>
                    <Digito valor={digito1}/>
                    
                </div>

                <div className="mt-3 p-3 d-flex justify-content-center gap-2">
                    <button onClick={reset} className="btn btn-primary btn-lg">Reset</button>
                </div>
            </div>
        </div>
    );
}