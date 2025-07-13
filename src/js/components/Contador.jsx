import { Digito } from "./Digito"

export const Contador = ({ counter }) => {
    const digito1 = counter % 10
    const digito2 = Math.floor(counter / 10) % 10
    const digito3 = Math.floor(counter / 100) % 10
    const digito4 = Math.floor(counter / 1000) % 10
    const digito5 = Math.floor(counter / 10000) % 10

    return (
        <>

            <div className="border border-info text-center m-5 p-4 row">

                <div className="border border-success p-5 mb-2 rounded-2rem col-2">
                    <i class="fa-solid fa-clock"></i>
                </div>
                <Digito digito={digito5} />
                <Digito digito={digito4} />
                <Digito digito={digito3} />
                <Digito digito={digito2} />
                <Digito digito={digito1} />

            </div>
        </>
    )
}