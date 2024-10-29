import { useState } from "react";

const Explorer = ({ data }) => {


    const [show, setShow] = useState(false);


    return <>
        <section className="explorer">
            {
                data?.isFolder ?
                    <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setShow(!show)}
                    >

                        📁{data.name}

                    </p>
                    :
                    <p>📄{data.name}</p>
            }
            {
                show && <div style={{ marginLeft: "20px" }}>
                    {
                        data.items.map((val, i) => {
                            return <Explorer data={val} key={i} />
                        })
                    }
                </div>
            }
        </section>
    </>
}

export default Explorer;