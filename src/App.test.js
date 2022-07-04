import React from 'react';
import {render, screen} from '@testing-library/react'

import App from './app'

describe('Componente principal', () => {
    describe('Ao abrir aplicativo...', () => {
        it ('mostrar o nome do banco', () => {
            render (<App />);
    
            expect(screen.getByText('ByteBank').toBeInTheDocument);
        })
        it ('mostrar saldo', () => {
            render (<App />);
    
            expect(screen.getByText('Saldo:').toBeInTheDocument);
        })
        it ('mostrar botão de realizar operação', () => {
            render (<App />);
    
            expect(screen.getByText('Realizar operação').toBeInTheDocument);
        })
    })    
})