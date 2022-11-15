import React from 'react';

export function MainContent({ characters = [] }) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="row">
            {characters.map((item, index) => (
                <div key={index} className="col mb-4">
                    <div className="card" style={{ minWidth: "300px" }} onClick={() => setModalShow(true)}>
                        <img src={item.image} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
