// file ini terlepas dari file TodoFooter.js, maka harus merender terlebih dahulu

// wajib di import
import { render, screen } from '@testing-library/react'

// import component yang ingin di test khusus react
import TodoFooter from '../TodoFooter'

// cara membuat testing unitnya
test( 'render to do footer', () => {
    // step stepnya
    // 1. RENDER COMPONENTNYA
    /* todo length panjangnya 5 */
    render(<TodoFooter todoLength={5}/>)

    // 2. SELECT DOM (pilih domnya)
    // mencari spesifik elementnya
    const containerElement = screen.getByTestId('todo-footer-element')

    // 3. EXPETED RESULT (ekspetasi hasilnya)
    expect(containerElement).toBeInTheDocument()
})
