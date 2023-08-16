import React from 'react';
import Card from './card';

const Mensaje = ({ mostrarModal, nombre, animalPreferido, error }) => {
  return (
    <div>
      {mostrarModal && (
        <Card>
          {error ? (
            <span style={{ color: 'red' }}>{error}</span>
          ) : (
            <>
              <span>
                <strong>Hola {nombre}!</strong>
              </span>
              <span>Sabemos que tu animal preferido es:</span>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  height: '24px',
                  alignItems: 'center',
                  background: '#3bdba654',
                  color: 'white',
                  borderRadius: '4px'
                }}
              >
                {animalPreferido}
              </div>
            </>
          )}
        </Card>
      )}
    </div>
  );
};

export default Mensaje;
