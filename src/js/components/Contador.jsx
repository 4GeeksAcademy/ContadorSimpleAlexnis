import { Digito } from "./Digito"

export const Contador = ({ counter }) => {
    return (
        <>
            {counter}
            <div className="border border-info text-center m-5 p-4 row">

                <Digito digito={0} />
                <Digito digito={0} />
                <Digito digito={0} />
                <Digito digito={0} />
                <Digito digito={0} />
                <Digito digito={9} />

            </div>
        </>
    )
}