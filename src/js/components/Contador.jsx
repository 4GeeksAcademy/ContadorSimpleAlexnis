import { Digito } from "./Digito"

export const Contador = ({ counter }) => {
    return (
        <>
           
            <div className="border border-info text-center m-5 p-4 row">

                <Digito digito/>
                <Digito digito={counter} />
                <Digito digito= {counter} />
                <Digito digito= {counter} />
                <Digito digito= {counter} />
                <Digito digito= {counter} />

            </div>
        </>
    )
}